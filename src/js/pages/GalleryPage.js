import React from "react";
import "../../css/gallery.scss";
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

    closeModal() {
      this.setState((state, props) => {
        return {
          modalOpen: false
        };
      })
    }

    nextImage() {
      this.setState((state, props) => {
        for(let i = 0; i < state.images.length - 1; i++) {
          if(this.state.images[i].id === this.state.imageSelected.id) {
            return {imageSelected: this.state.images[i + 1]};
          }
        }
        return {imageSelected: this.state.images[0]};
      });
    }

    prevImage() {
      this.setState((state, props) => {
        for(let i = 1; i < state.images.length; i++) {
          if(this.state.images[i].id === this.state.imageSelected.id) {
            return {imageSelected: this.state.images[i - 1]};
          }
        }
        return {imageSelected: this.state.images[this.state.images.length - 1]};
      });
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
          <Modal show={this.state.modalOpen} onHide={() => this.closeModal()}>
              <Modal.Header closeButton>
                <Modal.Title>{imageSelected?.description}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <img class="modal-image" src={imageSelected?.src}/>
              </Modal.Body>
              <div class="arrows-container" ref={this.modalArrowsRef}>
                <div class="left-arrow" onClick={() => this.prevImage()}>
                  <i class="fas fa-chevron-left"></i>
                </div>
                <div class="right-arrow" onClick={() => this.nextImage()}>
                  <i class="fas fa-chevron-right"></i>
                </div>
              </div>
            </Modal>
        </div>
      );
    }
  }
  
export default GalleryPage;