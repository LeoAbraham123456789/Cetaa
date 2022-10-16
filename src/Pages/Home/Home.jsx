import React, { useState } from 'react'
import { Navbar } from '../../Components/Navbar/Navbar'
import './home.scss'
import { ArrowBackIosNewOutlined, ArrowForwardIosOutlined, ArrowForwardOutlined} from '@mui/icons-material';
import { Footer } from '../../Components/Footer/Footer';

var i = 0;


export const Home = () => {
  var Images = ['https://vaave.s3.amazonaws.com/assets/site_content/151617177/banners/10e85c5a90129ab7e9fc30a600621868.jpg', 'https://vaave.s3.amazonaws.com/assets/site_content/151617177/banners/3b90fc4a167e7f8c2f88dbed4e1fa1ec.jpg', 'https://vaave.s3.amazonaws.com/assets/site_content/151617177/banners/ee6d14bd08dceb2a833747b5d17a1e02.jpg', 'https://vaave.s3.amazonaws.com/assets/site_content/151617177/banners/5e3231a4b7cf0563829147b01d7fc205.jpg'];
  const [Image, changeImage]=useState('https://vaave.s3.amazonaws.com/assets/site_content/151617177/banners/10e85c5a90129ab7e9fc30a600621868.jpg');
//   function changePicForwards() {
//     if (i === Images.length - 1) {
//          i = 0; 
//       } else {
//         i = i + 1; 
//     }
//     changeImage(Images[i]);
// }

function changePicBackwards() {
    if (i === 0) {
        i = Images.length - 1; 
    } else {
        i = i - 1;
    }
    changeImage(Images[i]);
}
  return (
    <div className='home'>
      <div className='header'>
        <img src='https://vaave.s3.amazonaws.com/assets/site_content/151617177/logo-cms.png'
        alt=''
        />
      </div>
      <Navbar/>
      <div className='row1'>
        <div className='image'>
        <ArrowBackIosNewOutlined className='arrow left' onClick={()=> changePicBackwards()}/>
          <img
          src={Image}
          alt=''
          />
         <ArrowForwardIosOutlined className='arrow right' onClick={()=> changePicBackwards()}/>
        </div>
        <div className='welcome'>
          <img
          src='https://vaave.s3.amazonaws.com/block_images/_3ee8673d68953feca1d747e916cc33c4__.png'
          alt=''
          />
        </div>
      </div>
      <Footer/>
    </div>
  )
}


// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { fetchPosts } from '../actions/index';
// import { Link } from 'react-router';

// var i = 0;
// var blogPostImages = ['./img/placeholder.jpg', './img/placeholderB.jpg', './img/placeholderC.png'];

// export default class HomePage extends Component {

//     changeBlogPicForwards() {
//         if (i == blogPostImages.length - 1) {
//              i = 0; 
//           } else {
//             i = i + 1; 
//         }
//         let blogPostImages = blogPostImages[i];
//     }

//     changeBlogPicBackwards() {
//         if (i == 0) {
//             i = blogPostImages.length - 1; 
//         } else {
//             i = i - 1;
//         }
//     }

//     render() {
//         var blogCurrentPic = this.state.blogPostImages[i];

//         return (

//             <div>