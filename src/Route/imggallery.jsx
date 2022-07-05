import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const Imagegallery = () => {
  const imgCard = [
    {
      title: 'Image by Nils Leonhardt',
      imgUrl:'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=983&q=80',
    },
    {
      title: 'Image by Tyler Lastovich',
      imgUrl: 'https://images.unsplash.com/photo-1511227499331-25c621db940e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
    },
    {
      title: 'Image by Zoltan Tasi',
      imgUrl: 'https://images.unsplash.com/photo-1496753480864-3e588e0269b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80',
    },
    {
      title: 'Image by Lino',
      imgUrl: 'https://images.unsplash.com/photo-1622185135505-2d795003994a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    },
    {
      title: 'Image by Andrew Filler',
      imgUrl: 'https://images.unsplash.com/photo-1563468706294-7e60627ec250?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    },
    {
      title: 'Image by Dimitry Grigoriev',
      imgUrl: 'https://images.unsplash.com/photo-1622116626849-8566a95d3aac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80',
    },
  ];
  const [preview, setPreview] = useState({
    show: false,
    index: null,
  });
  // console.log(preview.index, preview.show);
  return (
    <>
      <div className="relative">
        <h1 className="text-5xl text-center font-bold w-full mb-4">
          Photographer's Gallery
        </h1>
        {/* Image Gallary */}
        <div className="container">
          {imgCard.map((el, ind) => {
            return (
              // Image Card Div
              <div
                className="card"
                key={ind}
              >
                <div>
                  <img
                    src={el.imgUrl}
                    alt={el.title}
                    srcset=""
                    className="images"
                    id={ind}
                    onClick={e =>
                      setPreview(prev => {
                        return {
                          ...prev,
                          show: true,
                          index: e.target.id,
                        };
                      })
                    }
                  />
                </div>
                <h1 className="details">{el.title}</h1>
              </div>
            );
          })}
        </div>
        {/* Image Full Preview */}
        {preview.show && (
          <div className="flex items-center justify-center absolute top-10 right-5 left-5 w-[80%] h-[70vh] m-auto p-2">
            <div className="fixed">
              <div className="fixed l right-20 top-20">
                <Tooltip
                  title="Close"
                  onClick={e =>
                    setPreview(prev => {
                      return { ...prev, show: false };
                    })
                  }
                >
                  <IconButton>
                    <CloseIcon />
                  </IconButton>
                </Tooltip>
              </div>
              <img
                src={imgCard[preview.index]['imgUrl']}
                alt=""
                className="h-[100%] w-[100%] "
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default Imagegallery;