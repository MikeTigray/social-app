import Post from "../models/Posts";
import User from "../models/User";
// Create

export const createPost = async (req, res) => {
  try {
    const { userId, description, picturePath } = req.body;

    const user = await User.findById(userId);
    const newPost = new Post({
      userId,
      firstName: user.firstName,
      lastName: user.lastName,
      location: user.location,
      description,
      userPicturePath: user.userPicturePath,
      picturePath,
      likes: {},
      comments: [],
    });

    await newPost.save();

    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
