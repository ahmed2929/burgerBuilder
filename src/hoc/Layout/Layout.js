import React,{Component} from 'react'
import Aux from '../../hoc/aux/Aux'
import classes from './Layout.module.css'
import ToolBar from "../../components/Navigation/Toolbar/Toolbar"
import SideDar from "../../components/Navigation/SideDrawer/SideDrawer"
class Layout extends Component{

    state ={
        showBackDrower:false
    }
    
SideDarCloseHandler =()=>{
this.setState({
    showBackDrower:false
})
}

MenuClickHandler=()=>{

    this.setState((prevState)=>{
        return {showBackDrower:!prevState.showBackDrower}
    })


}

render(){




return (
<Aux>
<ToolBar MenuClickHandler={this.MenuClickHandler} />
<SideDar closed={this.SideDarCloseHandler} open={this.state.showBackDrower}/>
<main className={classes.Content}>

{this.props.children}

</main>




</Aux>
    )
}
    
}




export default Layout
