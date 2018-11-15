import React, { Component } from 'react';

import '../assets/stylesheets/list.scss'


import ModalVideo from 'react-modal-video'

import '../../node_modules/react-modal-video/scss/modal-video.scss';


class List extends Component{
    
    constructor(props){
        super(props)

        this.state ={
            isOpen: false
        }

        this.openModal = this.openModal.bind(this)
    }

    openModal(id) {
        this.setState({
            isOpen: true,
            id: id
        })
    }

    render() {
        return(
            <div>
                {this.props.data.map((x, index) => 
                    <div className="list-group" key={index} onClick={() => this.openModal(x.id.videoId)}>
                        <div className="list-group-item list-group-item-action align-items-start">

                            <div className="row">
                                <div className="col-sm-3">
                                    <img src={x.snippet.thumbnails.default.url} alt="thumbnail"/>
                                </div>

                                <div className="col-sm-9">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h5 className="mb-1">{x.snippet.title}</h5>
                                        <small>{x.snippet.publishedAt.slice(0,10)}</small>
                                    </div>
                                    <p className="mb-1">{x.snippet.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId={this.state.id} onClose={() => this.setState({isOpen: false})} />
            </div>

        )
    }

}

export default List