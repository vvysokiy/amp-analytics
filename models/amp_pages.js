import { Schema, model } from 'mongoose';

const AmpPages = new Schema({
  title: { type: String },
  text: { type: String, required: true },
  creatDate: { type: Date }
});

const Page = model('Page', AmpPages);

export default Page;
