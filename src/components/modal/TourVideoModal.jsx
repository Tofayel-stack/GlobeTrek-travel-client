import React from 'react';
import travelVideo from '../../assets/Cinematic Travel Video.mp4'

const TourVideoModal = () => {
    return (
        <div>
              {/* those are modal code  */}

              <input type="checkbox" id="video-modal" className="modal-toggle" />
                      <div className="modal">
                      <div className="modal-box relative">
                          <label htmlFor="video-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                          <div>


                          <video width="600" height="500" autoPlay muted>
                               
                                <source src={travelVideo} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>


                          </div>
                      </div>
                      </div>

      {/* modal end */}
        </div>
    );
};

export default TourVideoModal;