import mongoose from 'mongoose';

const connectDB = (url) => {
  url="mongodb+srv://dhia:a123b456@cluster0.asfb7qc.mongodb.net/?retryWrites=true&w=majority"
  mongoose.set('strictQuery', true);
  mongoose.connect(url)
    .then(() => console.log('connected to mongo'))
    .catch((err) => {
      console.error('failed to connect with mongo');
      console.error(err);
    });
};

export default connectDB;