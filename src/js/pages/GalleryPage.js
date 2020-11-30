import React from "react";
import "../../css/gallery-page.scss";
import { Categories, Pictures } from "../../data/gallery.js";
import { Badge, Modal } from 'react-bootstrap';
import { CSSTransitionGroup } from 'react-transition-group';

class GalleryPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        categorySelected: null,
        modalOpen: false,
        imageSelected: null,
        images: []
      };

      this.modalArrowsRef = React.createRef();
      this.swipeStartX = null;
      this.swipeStartY = null;
      this.swipeMoveX = null;
      this.swipeMoveY = null;
    }

    componentDidMount() {
      document.title = "YoungMakers Gallery";
      this.applyFilter();
    }

    toggleCategory(i) {
      this.setState((state, props) => {
        return {categorySelected: i};
      }, () => {
        this.applyFilter();
      });
    }

    applyFilter() {
      this.setState((state, props) => {
        if(state.categorySelected === null) {
          return {images: Pictures};
        } else {
          const filteredImages = Pictures.filter((picture) => {
            return picture.categories.indexOf(state.categorySelected) !== -1;
          });
          return {images: filteredImages};
        }
      });
      
    }

    selectImage(image) {
      this.setState((state, props) => {
        return {
          imageSelected: image, 
          modalOpen: true
        };
      })
    }

    handleImageTouchStart(e) {
      this.swipeStartX = e.targetTouches[0].clientX;
      this.swipeStartY = e.targetTouches[0].clientY;
    }

    handleImageTouchMove(e) {
      this.swipeMoveX = e.targetTouches[0].clientX;
      this.swipeMoveY = e.targetTouches[0].clientY;
    }

    handleImageTouchEnd(e) {
      const xDiff = this.swipeMoveX - this.swipeStartX;
      const yDiff = this.swipeMoveY - this.swipeStartY;

      if(Math.abs(yDiff) > 100) return;
      if(xDiff > 50) {
        // prev
        this.selectImage(this.getPrevImage());
      } else if(xDiff < -50) {
        // next
        this.selectImage(this.getNextImage());
      }
    }

    closeModal() {
      this.setState((state, props) => {
        return {
          modalOpen: false
        };
      })
      this.swipeStartX = null;
      this.swipeStartY = null;
      this.swipeMoveX = null;
      this.swipeMoveY = null;
    }

    getNextImage() {
      if(!this.state.imageSelected) return null;
      for(let i = 0; i < this.state.images.length - 1; i++) {
        if(this.state.images[i].id === this.state.imageSelected.id) {
          return this.state.images[i + 1];
        }
      }
      return this.state.images[0];
    }

    getPrevImage() {
      if(!this.state.imageSelected) return null;
      for(let i = 1; i < this.state.images.length; i++) {
        if(this.state.images[i].id === this.state.imageSelected.id) {
          return this.state.images[i - 1];
        }
      }
      return this.state.images[this.state.images.length - 1];
    }

    render() {
      const pictures = this.state.images.map((picture, i) => (
        <div class="image-container" key={picture.id} onClick={() => this.selectImage(picture)}>
          <img src={picture.thumbnail}/>
          <div class="image-cover">
            <div class="picture-title">{picture.title}</div>
          </div>
        </div>
      ));
      const placeholders = Array(10).fill(0).map((val, i) => {
        return (
          <div class="space-filler-placeholder" key={i}></div>
        );
      });

      const nextImage = this.getNextImage();
      const prevImage = this.getPrevImage();
      const imageSelected = this.state.imageSelected;
      if(this.state.modalOpen) {
        setTimeout(() => {
          this.modalArrowsRef.current.style.opacity = 1;
        }, 500);
      }
      return (
        <div class="gallery-page">
          <h1>Gallery</h1>
          <div class="categories-container">
            <Badge pill key={"all"} variant={this.state.categorySelected === null ? "primary" : "secondary"} onClick={() => this.toggleCategory(null)}>
              {"All"}
            </Badge>
            {Categories.map((category, i) => {
              return (
                <Badge pill key={i} variant={this.state.categorySelected === i ? "primary" : "secondary"} onClick={() => this.toggleCategory(i)}>
                  {category}
                </Badge>
              );
            })}
          </div>
          <div class="images-container">
            <CSSTransitionGroup component={React.Fragment} transitionName="image" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
              {pictures}
              {placeholders}
            </CSSTransitionGroup>
          </div>
          <Modal show={this.state.modalOpen} onHide={() => this.closeModal()} className="gallery-page-modal">
              <Modal.Header closeButton>
                <Modal.Title>{imageSelected?.description}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <img 
                onTouchStart={(e) => this.handleImageTouchStart(e)}
                onTouchMove={(e) => this.handleImageTouchMove(e)}
                onTouchEnd={(e) => this.handleImageTouchEnd(e)}
                class="modal-image" src={imageSelected?.src}/>
              </Modal.Body>
              <div class="arrows-container" ref={this.modalArrowsRef}>
                <div class="left-arrow" onClick={() => this.selectImage(prevImage)}>
                  <i class="fas fa-chevron-left"></i>
                </div>
                <div class="right-arrow" onClick={() => this.selectImage(nextImage)}>
                  <i class="fas fa-chevron-right"></i>
                </div>
              </div>
              <img class="hidden-image" height="0" width="0" src={nextImage?.src}/>
              <img class="hidden-image" height="0" width="0" src={prevImage?.src}/>
            </Modal>
        </div>
      );
    }
  }
  
export default GalleryPage;