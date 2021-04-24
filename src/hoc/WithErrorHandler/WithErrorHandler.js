import React,{Component} from "react"
import Modal from "../../components/UI/Modal/Modal"
import Aux from "../aux/Aux"
const WithErrorHandler = (WrapedComponent,axios)=>{
    console.log("its run hco",WrapedComponent)
    return class extends Component {
        state={
            error:null
        }

        componentDidMount(){
            console.log("did mount wi;; run")
           this.ReqInterceptor= axios.interceptors.request.use(req=>{
                this.setState({error:null})
                return req
            })


           this.ResInterceptor= axios.interceptors.response.use(res => res,(error)=>{
                this.setState({error})
            })
        }
        componentWillUnmount(){
            axios.interceptors.request.eject(this.ReqInterceptor)
            axios.interceptors.response.eject(this.ResInterceptor)
        }
        errorComfirmedHandler =()=>{
            this.setState({
                error :null
            })
        }

        render (){

            return (
                <Aux >
                    <Modal 
                    show={this.state.error}
                    clicked={this.errorComfirmedHandler}
                    
                    >Somsthing went wrong</Modal>

                     <WrapedComponent {...this.props} />
     
                </Aux>
                
            )



        }
    
    }
}
export default WithErrorHandler