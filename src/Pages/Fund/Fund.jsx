import React from "react";
import { ArrowForwardIosOutlined, ArrowForwardOutlined} from '@mui/icons-material';

import { Navbar } from '../../Components/Navbar/Navbar'
import './fund.scss'

import { Footer } from '../../Components/Footer/Footer';

export const Fund = () => {
  return (
    <div className="fund">
      <div className="header">
        <img
          src="https://vaave.s3.amazonaws.com/assets/site_content/151617177/logo-cms.png"
          alt=""
        />
      </div>
      <Navbar />
      <h1>RENOVATIONS</h1>
      <div className="contents">
        <div className="current">
          <img
          src="https://lh6.googleusercontent.com/FKoixlhdRRqKR-9S9LUo3uSKS26-Ufog0ajwaeau9UVYHsQoA98_ndYNJ-s9TvbvQiDqdPeq5sW-gdc=w1920-h899"
          alt=""
          />
          <img
          src="https://lh4.googleusercontent.com/V58HmRpdGzW4B2YG0WF7YZdEWZLrL0EHE9n7yYnrOIwXBHY90qBHt7ngQJafvIamyT753fapHxbQYdk=w1920-h899"
          alt=""
          />
        </div>
        <ArrowForwardOutlined className="arrow"/>
        <div className="proposed">
          <img
          src="https://lh6.googleusercontent.com/mYYf-42xM45mpFa_9qWd25mVMNDpopqHPwSMuZ_A63TU0Z0q2yq-oVuRzG42QxSXQLSkN2UzleL0-aM=w1920-h870"
          alt=""
          />
          <img
          src="https://lh3.googleusercontent.com/mSn8ieFGAeW2QiNp2ZBpKCYQjusaNpHBNse0c5znFxJGM7PsfhKxvgkrr1B2K7UjLnzX-P6Qriu6QqQ=w1920-h899"
          alt=""
          />
        </div>
        <div className="writings3">
        <p className="head">Cetaaa</p>
        <p> A family which cares.....</p>
        <p> which always stands together....</p>
        <p>Comee donate....</p>
        <p> and be a part of this family</p>
        </div>
      </div>
      <div className="button">
          Donate
        </div>
      <Footer/>
    </div>
  );
};
