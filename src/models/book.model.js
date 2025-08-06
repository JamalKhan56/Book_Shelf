import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const bookSchema = new Schema(
  {
    title: { type: String, required: true, trim: true, index: true },
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    genre: { type: String, required: true, trim: true },
    publicationDate: { type: Date, default: Date.now },
    coverImage: { type: String, default: "" }, // Cloudinary URL
    content: { type: String, required: true }, // Cloudinary URL for PDF or text
    description: { type: String, trim: true },
    isbn: { type: String, unique: true, trim: true, sparse: true },
    isPublished: { type: Boolean, default: false },
  },
  { timestamps: true }
);

bookSchema.plugin(mongooseAggregatePaginate);

export const Book = mongoose.model("Book", bookSchema);