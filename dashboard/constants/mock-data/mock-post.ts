import { languageEnum } from "@/interfaces/enum/language";
import { categoryOptions } from "../post-form-options/categories";
import { languageOptions } from "../post-form-options/languages";

import { IPost, ILanguage, ICategory } from "@/interfaces/post";

import { faker } from "@faker-js/faker";
import { tagOptions } from "../post-form-options/tags";
import { isAfter, isWithinInterval } from "date-fns";

faker.seed(1);

function createPost(): IPost {
  const createdAt = faker.date.between({
    from: "2024-10-01T00:00:00.000Z",
    to: "2024-12-31T00:00:00.000Z",
  });
  const updatedAt = faker.date.between({
    from: createdAt,
    to: "2025-01-01T00:00:00.000Z",
  });

  const id = faker.database.mongodbObjectId();
  const title = faker.lorem.sentence({ min: 3, max: 5 });
  const author = faker.person.fullName();
  const content = faker.lorem.paragraphs(3);

  const selectedLanguage = faker.helpers.arrayElement(languageOptions);
  const language: ILanguage = {
    code: selectedLanguage.value as languageEnum,
    name:
      selectedLanguage.value === "vi"
        ? "Tiếng Việt"
        : selectedLanguage.value === "en"
          ? "English"
          : "한글",
    createdAt,
    updatedAt,
  };

  const selectedTags = faker.helpers.arrayElements(tagOptions);
  const tags = selectedTags.map((value) => value.label);

  const selectedCategory = faker.helpers.arrayElement(categoryOptions);
  const category: ICategory = {
    id: selectedCategory.value,
    name: selectedCategory.label,
    createdAt,
    updatedAt,
  };
  const isActive = faker.datatype.boolean();

  return {
    id,
    title,
    author,
    content,
    language,
    tags,
    category,
    isActive,
    createdAt,
    updatedAt,
  };
}

export function makePostData(n: number) {
  const arr: IPost[] = [];
  for (let i = 0; i < n; i++) {
    arr.push(createPost());
  }
  return arr;
}

// Ví dụ trong mongo có 1000 bài đăng
const data = makePostData(1000);

// Tạo số mỗi lần chạy
const rng = Math.random() * 100;

export async function fetchPosts(
  options: {
    pageIndex: number;
    pageSize: number;
  },
  query: any,
) {
  // Rớt mạng
  // if (rng <= 30) return Promise.reject("404");
  // Đợi mạng tải dữ liệu
  // await new Promise((r) => setTimeout(r, 500));

  // Lọc ví dụ
  const filteredData =
    query?.from !== undefined || query?.to !== undefined
      ? data.filter((value: IPost, index) => {
          if (
            query?.from !== undefined &&
            query?.to !== undefined &&
            isWithinInterval(value.updatedAt.getTime(), {
              start: query?.from.getTime(),
              end: query?.to.getTime(),
            })
          ) {
            if (
              query?.title === undefined &&
              query.category === undefined &&
              query.tag === undefined &&
              query.language === undefined
            ) {
              return value;
            }
            return (
              (query?.title &&
                value.title.toLowerCase().startsWith(query?.title)) ||
              (query.category &&
                query.category === (value.category as ICategory).id) ||
              (query.tag && query.tag === value.tags[index]) ||
              (query.language &&
                query.language === (value.language as ILanguage).code)
            );
          } else if (
            query?.from !== undefined &&
            query?.to === undefined &&
            isAfter(value.updatedAt.getTime(), query?.from.getTime())
          ) {
            if (
              query?.title === undefined &&
              query.category === undefined &&
              query.tag === undefined &&
              query.language === undefined
            ) {
              return value;
            }
            return (
              (query?.title &&
                value.title.toLowerCase().startsWith(query?.title)) ||
              (query.category &&
                query.category === (value.category as ICategory).id) ||
              (query.tag && query.tag === value.tags[index]) ||
              (query.language &&
                query.language === (value.language as ILanguage).code)
            );
          }
        })
      : data.filter((value: IPost, index) => {
          if (
            query?.title === undefined &&
            query.category === undefined &&
            query.tag === undefined &&
            query.language === undefined
          ) {
            return value;
          }

          return (
            (query?.title &&
              value.title.toLowerCase().startsWith(query?.title)) ||
            (query.category &&
              query.category === (value.category as ICategory).id) ||
            (query.tag && query.tag === value.tags[index]) ||
            (query.language &&
              query.language === (value.language as ILanguage).code)
          );
        });

  return {
    data: filteredData.slice(
      options.pageIndex * options.pageSize,
      (options.pageIndex + 1) * options.pageSize,
    ),
    rowCount: filteredData.length,
  };
}

export async function fetchPostById(id: string) {
  // if (rng <= 30) return Promise.reject("404");

  // await new Promise((r) => setTimeout(r, 500));

  return data.find((post) => post.id === id)!;
}
