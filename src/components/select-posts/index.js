import { BaseControl } from '@wordpress/components';
import { withInstanceId } from '@wordpress/compose';
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
        this.setState({ showPostsList : true, filteredPosts : [1,2,3,4,5,6,7,8,9,9,10,11,12,13,14] }) 
    }
    
    addPost(post){
        let posts = [ ...this.state.selectedPosts, post ];
        this.setState( { selectedPosts : posts });
    }

    removePost(post){
        let posts = this.state.selectedPosts.filter(p => p != post);

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
                            { this.state.filteredPosts.map(p => (
                                <li onClick={ () => this.addPost(p) }>{ p }</li>
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
                                { this.state.selectedPosts.map(p => (
                                    <li> { p }  <span className="remove" onClick={ () => this.removePost(p) } >&times;</span> </li>
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