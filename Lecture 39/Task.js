const { model, Schema } = require("mongoose");

const taskSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    isComplete: { type: Boolean, default: false },
    // owner: { type: Schema.Types.ObjectId, require: true, ref: "User" },
  },
  { timestamps: true }
);

const TaskModel = model("Task", taskSchema);

module.exports = TaskModel;