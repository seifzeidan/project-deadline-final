import mongoose from 'mongoose'


const connectDB =  (url) =>{ //mongoose connect method returns a promise so we set async await
    return mongoose.connect(url)


}                

export default connectDB