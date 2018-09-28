import { model, connect } from 'mongoose';

import '../models/amp_pages';

const Page = model('Page');

export function setUpConnection() {
  connect('mongodb://localhost/ampPages');
}

export function listPages() {
  return Page.find();
}

export function createPage(data) {
  const page = {
    title: { type: String },
    text: { type: String, required: true },
    creatDate: { type: Date }
  };
  return Page.find();
}
