// const Blog = require("../models/blogModel");
// const { cache } = require("../utils/cache");

// // Get all blogs with advanced features
// exports.getAllBlogs = async (req, res, next) => {
//   try {
//     // Destructure query parameters
//     const {
//       page = 1,
//       limit = 10,
//       sort = "-createdAt",
//       status = "active",
//       category,
//       tag,
//       search,
//     } = req.query;

//     // Build query object
//     const query = { status };

//     if (category) query.category = category;
//     if (tag) query.tags = { $in: [tag] };
//     if (search) {
//       query.$or = [
//         { title: { $regex: search, $options: "i" } },
//         { content: { $regex: search, $options: "i" } },
//       ];
//     }

//     // Check cache first
//     const cacheKey = `blogs:${JSON.stringify(req.query)}`;
//     const cachedData = await cache.get(cacheKey);

//     if (cachedData) {
//       return res.json({
//         success: true,
//         fromCache: true,
//         ...JSON.parse(cachedData),
//       });
//     }

//     // Execute query
//     const blogs = await Blog.find(query)
//       .sort(sort)
//       .skip((page - 1) * limit)
//       .limit(Number(limit))
//       .lean();

//     const total = await Blog.countDocuments(query);

//     // Cache results
//     const responseData = {
//       results: blogs,
//       total,
//       page: Number(page),
//       pages: Math.ceil(total / limit),
//       message: "Blogs fetched successfully",
//     };

//     await cache.set(cacheKey, JSON.stringify(responseData), 3600);

//     res.json({
//       success: true,
//       ...responseData,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// // Get single blog
// exports.getBlogById = async (req, res, next) => {
//   try {
//     const blog = await Blog.findByIdAndUpdate(
//       req.params.id,
//       { $inc: { views: 1 } },
//       { new: true }
//     ).populate("author", "name email");

//     if (!blog) {
//       return res.status(404).json({
//         success: false,
//         message: "Blog not found",
//       });
//     }

//     res.json({
//       success: true,
//       result: blog,
//       message: "Blog fetched successfully",
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// // Create blog
// exports.createBlog = async (req, res, next) => {
//   try {
//     const blog = new Blog({
//       ...req.body,
//       author: req.user.id, // Assuming you have authentication
//       updatedBy: req.user.id,
//     });

//     await blog.save();

//     // Invalidate relevant cache
//     await cache.deletePattern("blogs:*");

//     res.status(201).json({
//       success: true,
//       result: blog,
//       message: "Blog created successfully",
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// // Update blog
// exports.updateBlog = async (req, res, next) => {
//   try {
//     const blog = await Blog.findByIdAndUpdate(
//       req.params.id,
//       {
//         ...req.body,
//         updatedBy: req.user.id,
//         updatedAt: new Date(),
//       },
//       { new: true, runValidators: true }
//     );

//     if (!blog) {
//       return res.status(404).json({
//         success: false,
//         message: "Blog not found",
//       });
//     }

//     // Invalidate cache
//     await cache.deletePattern("blogs:*");
//     await cache.delete(`blog:${req.params.id}`);

//     res.json({
//       success: true,
//       result: blog,
//       message: "Blog updated successfully",
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// // Delete blog (soft delete)
// exports.deleteBlog = async (req, res, next) => {
//   try {
//     const blog = await Blog.findByIdAndUpdate(
//       req.params.id,
//       { status: "archived", updatedBy: req.user.id },
//       { new: true }
//     );

//     if (!blog) {
//       return res.status(404).json({
//         success: false,
//         message: "Blog not found",
//       });
//     }

//     // Invalidate cache
//     await cache.deletePattern("blogs:*");
//     await cache.delete(`blog:${req.params.id}`);

//     res.json({
//       success: true,
//       message: "Blog archived successfully",
//     });
//   } catch (error) {
//     next(error);
//   }
// };
