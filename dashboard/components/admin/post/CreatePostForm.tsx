// import React, { useEffect } from "react";
// import { Form, Input, Button, Checkbox } from "antd";
// import dynamic from "next/dynamic"; // Using dynamic import for ReactQuill
// import "react-quill/dist/quill.snow.css";

// // Define the interface for Post
// interface Post {
//   id?: string;
//   language: string;
//   image: string;
//   title: string;
//   content: string;
//   category: string;
//   isActive: boolean;
// }

// interface CreatePostFormProps {
//   post: Post | null;
//   onSubmit: (values: Post) => void;
//   onClose: () => void;
// }

// const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

// const CreatePostForm: React.FC<CreatePostFormProps> = ({
//   post,
//   onSubmit,
//   onClose,
// }) => {
//   const [form] = Form.useForm();

//   useEffect(() => {
//     if (post) {
//       form.setFieldsValue(post);
//     } else {
//       form.resetFields();
//     }
//   }, [post, form]);

//   const onFinish = (values: Post) => {
//     onSubmit({ ...values, content: form.getFieldValue("content") });
//   };

//   return (
//     <>
//       {/* Increased width */}
//       <h2 className="mb-6 text-xl font-semibold text-left">
//         {post ? "Update Post" : "Create Post"}
//       </h2>
//       <button
//         onClick={onClose}
//         className="absolute top-2 right-2 text-lg text-gray-600 hover:text-gray-800"
//       >
//         X
//       </button>
//       <Form
//         form={form}
//         layout="vertical"
//         onFinish={onFinish}
//         initialValues={
//           post || {
//             id: "",
//             language: "",
//             image: "",
//             title: "",
//             content: "",
//             category: "",
//             isActive: true,
//           }
//         }
//         className="space-y-4"
//       >
//         <Form.Item label="ID" name="id" hidden>
//           <Input placeholder="Generated ID" readOnly />
//         </Form.Item>

//         <Form.Item
//           label="Image"
//           name="image"
//           rules={[{ required: true, message: "Please enter the image URL!" }]}
//         >
//           <Input placeholder="Enter image URL" className="h-12" />
//         </Form.Item>

//         <Form.Item
//           label="Title"
//           name="title"
//           rules={[{ required: true, message: "Please enter a title!" }]}
//         >
//           <Input placeholder="Enter title" className="h-12" />
//         </Form.Item>

//         <Form.Item
//           label="Content"
//           name="content"
//           rules={[{ required: true, message: "Please enter content!" }]}
//         >
//           <ReactQuill
//             theme="snow"
//             value={form.getFieldValue("content")}
//             onChange={(content) => form.setFieldsValue({ content })}
//             className="border border-gray-300 rounded-md"
//             style={{ maxHeight: "300px", overflowY: "auto" }}
//           />
//         </Form.Item>

//         <Form.Item
//           label="Category"
//           name="category"
//           rules={[{ required: true, message: "Please select a category!" }]}
//         >
//           <Input placeholder="Enter category" className="h-12" />
//         </Form.Item>

//         <Form.Item name="isActive" valuePropName="checked">
//           <Checkbox>Active</Checkbox>
//         </Form.Item>

//         <Form.Item>
//           <div className="flex justify-between">
//             <Button onClick={onClose} className="w-1/2 mr-2">
//               Close
//             </Button>
//             <Button type="primary" htmlType="submit" className="w-1/2 ml-2">
//               {post ? "Update" : "Create"}
//             </Button>
//           </div>
//         </Form.Item>
//       </Form>
//     </>
//   );
// };

// export default CreatePostForm;
