import React from 'react';

export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                <a
                  href='https://wa.link/6hhedu'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Order Now'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Order Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 767px) {
          .intro {
            display: block;
            padding: 0;
            background-position: center;
          }
          .intro .overlay {
            background: rgba(0, 0, 0, 0.6);
          }
          .intro-text {
            padding-top: 100px;
            padding-bottom: 150px;
            text-align: center;
          }
          .intro h1 {
            font-size: 38px;
            line-height: 1.2;
          }
          .intro p {
            font-size: 16px;
            line-height: 1.5;
          }
          .btn-custom {
            padding: 12px 24px;
            font-size: 16px;
          }
        }
      `}</style>
    </header>
  );
};
