// import { yupResolver } from "@hookform/resolvers/yup";
// import {
//   Box,
//   Button,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogTitle,
//   FormControl,
//   FormHelperText,
//   FormLabel,
//   MenuItem,
//   Select,
//   Typography,
// } from "@mui/material";
// import  { useContext, useEffect } from "react";
// import { Controller, useForm } from "react-hook-form";
// import { articleSchema } from "../services/validation/article.validation";
// import { ArticleInputField } from "../services/json/input-fileds/article.inputs";
// import DynamicInput from "./DynamicInput";
// import type { ArticlePaylod } from "../types/interface/news.interface";
// import NewsContext from "../context/news/CreateNewsContext";
// import CategoryContext from "../context/category/CreateCategoryContext";

// const NewsDialog = () => {
//   const newsContext = useContext(NewsContext);
//   if (!newsContext) {
//     throw new Error("News Context is not provided!!");
//   }
//   const categoryContext = useContext(CategoryContext);
//   if (!categoryContext) {
//     throw new Error("Ctageory Context is not provided!!");
//   }
//   console.log("news details", newsContext?.newsState?.isNewsDetails)

//   useEffect(() => {
//     categoryContext.fetchCategories();
//   }, []);

//   const {
//     register,
//     control,
//     formState: { errors },
//     handleSubmit,
//     reset,
//     setValue,
//   } = useForm<ArticlePaylod>({
//     resolver: yupResolver(articleSchema),
//   });

//   const onSubmit = (data: ArticlePaylod) => {
//     console.log("data", data);
//     reset();
//   };

//   useEffect(()=>{
//     if(newsContext?.newsState?.isNewsDetails){
//       reset({
//         title: newsContext?.newsState?.isNewsDetails.title,
//         content:newsContext?.newsState?.isNewsDetails?.content,
//         category: newsContext?.newsState?.isNewsDetails?.category?._id
//       })
//       if(newsContext?.newsState?.isNewsDetails?.image){
//         newsContext.handleSetImage(newsContext?.newsState?.isNewsDetails?.image?.url)
//       }
//     }
//   },[reset, newsContext?.newsState?.isNewsDetails])
//   return (
//     <Dialog
//       open={newsContext?.newsState?.openAddNews}
//       onClose={() => newsContext.handleCloseDialog()}
//       maxWidth="md"
//     >
//       <DialogTitle>{newsContext.newsState.isNewsDetails ? "Edit":"Add"} Article</DialogTitle>
//       <DialogContent>
//         <Box
//           onSubmit={handleSubmit(onSubmit)}
//           component="form"
//           sx={{
//             width: "400px",
//             display: "flex",
//             flexDirection: "column",
//             gap: 1,
//           }}
//         >
//           {ArticleInputField?.map((field: any) => (
//             <div key={field.label}>
//               <DynamicInput
//                 label={field.label}
//                 name={field.name}
//                 type={field.type}
//                 required={field.required}
//                 register={register}
//                 errors={errors}
//               />
//             </div>
//           ))}

//           <FormControl error={!!errors.category}>
//             <FormLabel>Category</FormLabel>
//             <Controller
//               name="category"
//               control={control}
//               render={({ field }) => (
//                 <Select value={field.value} onChange={field.onChange}>
//                   {categoryContext?.categoryState?.categories?.map(
//                     (category) => (
//                       <MenuItem value={category._id}>{category.name}</MenuItem>
//                     ),
//                   )}
//                 </Select>
//               )}
//             />
//             <FormHelperText>{errors?.category?.message}</FormHelperText>
//           </FormControl>
//           <Box
//             sx={{
//               border: "1px dotted black",
//               height: "150px",
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               justifyItems: "center",
//             }}
//           >
//             {newsContext?.newsState?.imagePreview ? (
//               <img
//                 src={newsContext?.newsState?.imagePreview}
//                 alt="img"
//                 style={{
//                   width: "120px",
//                   height: "100px",
//                   objectFit: "cover",
//                 }}
//               />
//             ) : (
//               <Typography sx={{ fontWeight: "bold" }}>
//                 Upload Article Image
//               </Typography>
//             )}
//             <Button
//               variant="contained"
//               onClick={() => document.getElementById("upload")?.click()}
//             >
//               {newsContext?.newsState?.imagePreview ? "Change" : "upload"}{" "}
//               <input
//                 id="upload"
//                 type="file"
//                 hidden
//                 onChange={(e) => {
//                   const file = e?.target?.files?.[0] as File;
//                   newsContext.handleSetImage(URL.createObjectURL(file));
//                   setValue("image", file);
//                 }}
//               />
//             </Button>
//           </Box>
//           <DialogActions sx={{ display: "flex", gap: 1 }}>
//             <Button
//               variant="outlined"
//               onClick={() => newsContext.handleCloseDialog()}
//             >
//               close
//             </Button>
//             <Button type="submit" variant="contained" sx={{ bgcolor: "green" }}>
//               {newsContext.newsState.isNewsDetails ? "Update": "Add"}
//             </Button>
//           </DialogActions>
//         </Box>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default NewsDialog;

// // class Emp {
// //   name: string;
// //   email: string;
// //   constructor(name:string, email: string){
// // this.name = name;
// // this.email = email
// //   }
// // }

// // const emp1 = new Emp("xyz", "xyz@gmail.com");
// // console.log("emp1", emp1);
