import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Swiper from 'react-id-swiper';
import 'swiper/swiper.scss'



const useStyles = makeStyles(theme => ({
  SwiperElement:{
    // minHeight: 'calc(100vh - 172px)'
    height: '100%'
  },
  swiperContainerDefine:{
    // minHeight: 'calc(100vh - 172px)',
    // maxHeight:'calc(100vh - 172px)',
    height: '105px !important',
    maxHeight: '105px !important'
  }, 
  img:{
    // 
    maxHeight: 'calc(100vh - 230px)',
    // height:'auto',
    // maxWidth:'100%'
  },
  imgcontainer:{
    maxWidth: '1200px',
    maxHeight: 'calc(100vh - 170px)',
    minHeight:'calc(100vh - 170px)',

  }
}));

const CustomSwiper = () => {
  const classes = useStyles();

  const params = {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 0,

    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }

  }
 
  return(
    // <div className={classes.swiperContainer} >
    <Swiper  {...params}>

    
    <div className={classes.imgcontainer}>
      <img className={classes.img}  src='https://i.imgur.com/qZ9W8ct.png'></img><br />
      A non-typical welcome page, filled with features you could only dream of. But not anymore. 
    </div>
    <div className={classes.imgcontainer}>
      <img className={classes.img} src='https://i.imgur.com/Cqrwe35.png'></img><br />
      All updates captured at first glance. 
    </div>
    <div className={classes.imgcontainer}>
      <img className={classes.img} src='https://i.imgur.com/wBVjhX2.png'></img><br />

    </div>
    <div className={classes.imgcontainer}>
      <img className={classes.img} src='https://i.imgur.com/KAHeJMG.png'></img><br />
      Couldn't register a course? Not a problem anymore. 
    </div>
    <div className={classes.imgcontainer}>
      <img className={classes.img} src='https://i.imgur.com/JilcflE.png'></img><br />
      Now I'll never forget to sign up for my attendance. 
    </div>
    <div className={classes.imgcontainer}>
      <img className={classes.img} src='https://i.imgur.com/L35NW6G.png'></img><br />
      Hey, I've got a question. Do you know the answer?
    </div>
    <div className={classes.imgcontainer}>
      <img className={classes.img} src='https://i.imgur.com/s9wZXuW.png'></img><br />
      My scores have never been more accurately analysed. 
    </div>
    <div className={classes.imgcontainer}>
      <img className={classes.img} src='https://i.imgur.com/bPpxiLd.png'></img><br />
      Now I see, higher the attendance, higher the score I could get. 
    </div>
    <div className={classes.imgcontainer}>
      <img className={classes.img} src='https://i.imgur.com/rvsoaAU.png'></img><br />
      Not even my phone would stop me from using.  
    </div>
  
  </Swiper>
    //  </div>

  
  )

};
 
export default CustomSwiper;