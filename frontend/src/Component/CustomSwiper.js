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
      <h2>With CUHK Live Classroom, you can:</h2>
      <img className={classes.img}  src='https://i.imgur.com/qZ9W8ct.png'></img>
    </div>
    <div className={classes.imgcontainer}>
      <img className={classes.img} src='https://i.imgur.com/Cqrwe35.png'></img>
    </div>
    <div className={classes.imgcontainer}>
      <img className={classes.img} src='https://i.imgur.com/wBVjhX2.png'></img>
    </div>
    <div className={classes.imgcontainer}>
      <img className={classes.img} src='https://i.imgur.com/KAHeJMG.png'></img>
    </div>
    <div className={classes.imgcontainer}>
      <img className={classes.img} src='https://i.imgur.com/JilcflE.png'></img>
    </div>
    <div className={classes.imgcontainer}>
      <img className={classes.img} src='https://i.imgur.com/L35NW6G.png'></img>
    </div>
    <div className={classes.imgcontainer}>
      <img className={classes.img} src='https://i.imgur.com/s9wZXuW.png'></img>
    </div>
    <div className={classes.imgcontainer}>
      <img className={classes.img} src='https://i.imgur.com/bPpxiLd.png'></img>
    </div>
    <div className={classes.imgcontainer}>
      <img className={classes.img} src='https://i.imgur.com/rvsoaAU.png'></img>
    </div>
  
  </Swiper>
    //  </div>

  
  )

};
 
export default CustomSwiper;