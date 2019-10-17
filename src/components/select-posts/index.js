import { BaseControl } from '@wordpress/components';
import { withInstanceId } from '@wordpress/compose';
import apiFetch from '@wordpress/api-fetch'
const { Component } = wp.element;


export default class SelectControl extends Component{
    constructor() {
        super(...arguments);
        this.state = { showPostsList : false, filteredPosts : [], selectedPosts : [], searchBox : false };
    }

    emitValue(){
        // this.props.onChange()
    }
    
    onChangeValue( event ) {
        this.setState({ showPostsList : true }) 

        apiFetch( { path: `/wp-json/hl-blocks/v1/aqc-posts?title=${event.target.value}&post_type=any` } )
        .then(results => {
            this.setState({ filteredPosts : results.posts })
        })
    }
    
    addPost(post){
        let posts = [ ...this.state.selectedPosts, post ];
        this.setState( { selectedPosts : posts });
    }

    removePost(postID){
        let posts = this.state.selectedPosts.filter(p => p.ID != postID);

        this.setState( { selectedPosts : posts });
    }

    closePostsList(){
        this.setState({ showPostsList : false })
    }

    render() {
        const id = `inspector-select-posts`;

        return (
            <BaseControl label="Selecionar Posts Específicos" id={ id } className="select-posts">
                <input type="text" onChange={(e) => this.onChangeValue(e)} placeholder="Comece a digitar para procurar por posts"/>
                { this.state.showPostsList && (
                    <div class="select-posts__posts-list">
                        <ul>
                            { this.state.filteredPosts.map(post => (
                                <li onClick={ () => this.addPost(post) }>{ post.title }</li>
                            )) }
                        </ul>
                        <button onClick={() => this.closePostsList() } className="components-button is-button is-default">Fechar</button>
                    </div>
                )
                } 
                {
                    this.state.selectedPosts.length > 0 && (
                        <div className="select-posts__selected mt-2">
                            <p><strong>Posts selecionados</strong></p>
                            <ul className="mt-0">
                                { this.state.selectedPosts.map(post => (
                                    <li> { post.title }  <span className="remove" onClick={ () => this.removePost(post.ID) } >&times;</span> </li>
                                ) ) }
                            </ul>
                        </div>
                    )
                }
            </BaseControl>
        )
    }
}

// function SelectControl( {
//     instanceId,
//     onChange,
//     className,
// 	...props
// } ){
//     const id = `inspector-select-posts-${ instanceId }`;

//     const onChangeValue = ( event ) => {
// 		showPostsList = true;
//     };
    
//     let showPostsList = true
//     console.log(showPostsList);

// }

// export default withInstanceId( SelectControl );