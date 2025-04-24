class APIFeatures {
  query: any;
  queryStr: any;

  constructor(query: any, queryStr: any) {
    this.query = query;
    this.queryStr = queryStr;
  }

  search() {
    const keyword = this.queryStr.keyword
      ? {
          name: {
            contains: this.queryStr.keyword,
            mode: 'insensitive',
          },
        }
      : {};

    this.query = { ...this.query, where: { ...this.query.where, ...keyword } };
    return this;
  }

  limit() {
    const limit = parseInt(this.queryStr.limit, 10);
    if (limit > 0) {
      this.query = { ...this.query, take: limit };
    }
    return this;
  }

  filter() {
    const queryCopy = { ...this.queryStr };

    // Removing fields from the query
    const removeFields = ['sort', 'page', 'limit'];
    removeFields.forEach((el) => delete queryCopy[el]);

    // Advanced filter for price, ratings etc
    let queryStr = JSON.stringify(queryCopy);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (match) => `$${match}`);

    const parsedQuery = JSON.parse(queryStr);

    // Make string fields case-insensitive
    for (const key in parsedQuery) {
      if (typeof parsedQuery[key] === 'string') {
        parsedQuery[key] = { $regex: parsedQuery[key], $options: 'i' };
      }
    }

    this.query = {
      ...this.query,
      where: { ...this.query.where, ...JSON.parse(queryStr) },
    };
    return this;
  }

  pagination(resPerPage) {
    const currentPage = Number(this.queryStr.page) || 1;
    const skip = resPerPage * (currentPage - 1);

    this.query = { ...this.query, skip, take: resPerPage };
    return this;
  }

  sort() {
    const sortBy = this.queryStr.sort ? this.queryStr.sort : 'createdAt';
    const order = sortBy.startsWith('-') ? 'desc' : 'asc';
    const field = sortBy.startsWith('-') ? sortBy.substring(1) : sortBy;
    this.query = { ...this.query, orderBy: { [field]: order } };
    return this;
  }
}

export default APIFeatures;
