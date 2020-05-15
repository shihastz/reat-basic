//==========counters and multi language====
import React, {Component} from "react";
import "./App.css";
//import { Header, Footer } from "./Home";
import Todo from './component/Todo';
import Counter from './component/Counter';
import Form from "./component/Form";
import List from "./component/List";
import 'bootstrap/dist/css/bootstrap.min.css';
import Ajax from "./Ajax";
import AjaxForm from "./AjaxForm";

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {  }
  // }

  state = {
    myString : "h3lloq",
    myVal : 0
  }

  handleChange = () =>{
    this.setState((prev)=>({
      myString : "sdsgsgsg" ,
      myVal : prev.myVal+1
    }))
  }
  render() {
    return (
      <div className="App">
         <Counter/>
         <List/>
         <Form/>
        <AjaxForm/>
        <br/>
        <hr/>
        <Ajax/>
        <hr/>
        {/* <Muli/> */}
       
        <p>{this.state.myVal}</p>
        <button onClick={this.handleChange}>click</button>
        <Todo stringText={this.state.myString}/>
        <hr/>
       
        
        

      </div>
     );
  }
}

export default App;

//for ajax
// import React, { Component } from "react";
// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Form from "./componenet/registration/Form";

// class App extends Component {

//   render() {
//     return (
//       <div className="App">
//         <Form />
//       </div>
//     );
//   }
// }

// export default App;

//for ui elements
// import React, { Component } from "react";
// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Icons from "./componenet/elements/Icons";
// import Toastify from "./componenet/elements/Toastify";
// import ModalPopup from "./componenet/elements/ModalPopup";
// import TippyComponent from "./componenet/elements/TippyComponent";
// import CountUpComponent from "./componenet/elements/CountUpComponent";
// import IdleTimerComponent from "./componenet/elements/IdleTimerComponent";
// import ColorComponent from "./componenet/elements/ColorComponent";
// import DateComponent from "./componenet/elements/DateComponent";
// import Loading from "./componenet/elements/Loading";
// import LineChart from "./componenet/elements/LineChart";
// import BarChart from "./componenet/elements/BarChart";
// import DonutChart from "./componenet/elements/DonutChart";

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <br/>
//         <DonutChart/>
//         <BarChart/>
//         <LineChart/>
//         <br/>
//         <hr/>
//         <br/>
//         <Loading/>
//         <br/>
//         <hr/>
//         <br/>
//         <DateComponent/>
//         <br/>
//         <hr/>
//         <br/>
//         <ColorComponent/>
//         <br/>
//         <hr/>
//         <br/>
//         <IdleTimerComponent/>
//         <br/>
//         <hr/>
//         <br/>
//         <CountUpComponent/>
//         <br/>
//         <hr/>
//         <br/>
//         <TippyComponent/>
//         <br/>
//         <hr/>
//         <ModalPopup/>
//         <hr/>
//         <Toastify />
//         <hr/>
//         <Icons />
//       </div>
//     );
//   }
// }

// export default App;

//Advanced
// import React, { Component } from "react";
// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import RefsDemo from "./componenet/advanced/RefsDemo";
// import PortalsDemo from "./componenet/advanced/PortalsDemo";
// import ErrorDemo from "./componenet/advanced/ErrorDemo";
// import ErrorBoundary from "./componenet/advanced/ErrorBoundary";
// import ClickCounter from "./componenet/advanced/hoc/ClickCounter";
// import HoverCounter from "./componenet/advanced/hoc/HoverCounter";
// import RenderCounter from "./componenet/advanced/renderProps/RenderCounter";
// import RenderClickCounter from "./componenet/advanced/renderProps/RenderClickCounter";
// import RenderHoverCounter from "./componenet/advanced/renderProps/RenderHoverCounter";

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <br />
//         <RenderCounter
//           render={(count, incrementcount) => (
//             <RenderClickCounter count={count} incrementcount={incrementcount} />
//           )}
//         />
//         <RenderCounter
//           render={(count, incrementcount) => (
//             <RenderHoverCounter count={count} incrementcount={incrementcount} />
//           )}
//         />
//         <hr />
//         <br />
//         <ClickCounter numb="55" />
//         <HoverCounter />
//         <hr />
//         <br />
//         <ErrorBoundary>
//           <ErrorDemo name="superman" />
//           {/* <ErrorDemo name="joker" /> */}
//         </ErrorBoundary>

//         <hr />
//         <RefsDemo />
//         <PortalsDemo />
//       </div>
//     );
//   }
// }

// export default App;

//advanced hoc
// import React, { Component } from "react";
// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import ComponentC from "./componenet/advanced/context/ComponentC";
// import { UserProvider } from "./componenet/advanced/context/userContext";

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <br />
//         <UserProvider value="shihas">
//           <ComponentC />
//         </UserProvider>
//       </div>
//     );
//   }
// }

// export default App;

//hooks
// import React, { useReducer } from "react";
// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import HooksCounter from "./componenet/hooks/HooksCounter";
// import HookCounterTwo from "./componenet/hooks/HookCounterTwo";
// import HookForm from "./componenet/hooks/HookForm";
// import HooksList from "./componenet/hooks/HooksList";
// import EffectHooksCounter from "./componenet/hooks/EffectHookCounter";
// import HooksMouseDisplay from "./componenet/hooks/HooksMouseDisplay";
// import IntervalHookCounter from "./componenet/hooks/IntervalHookCounter";
// import DataFetching from "./componenet/hooks/DataFetching";
// import SingleDataFetching from "./componenet/hooks/SingleDataFetching";
// import ComponentA from "./componenet/hooks/hooksContext/ComponentA";
// import CounterOne from "./componenet/hooks/reducer/CounterOne";
// import MultipleCounter from "./componenet/hooks/reducer/MultipleCounter";
// import MultipleReducerCounter from "./componenet/hooks/reducer/MultipleReducerCounter";
// import ComponentX from "./componenet/hooks/globalStateManagement/ComponentX";
// import ReducerDataFetching from "./componenet/hooks/reducer/ReducerDataFetching";
// import FocusInput from "./componenet/hooks/FocusInput";
// import IntervalHookCounterTwo from "./componenet/hooks/IntervalHookCounterTwo";
// import CustomForm from "./componenet/hooks/customHooks/CustomForm";

// export const UserContext = React.createContext();
// export const ChannelContext = React.createContext();

// //for global state management
// export const CounterContext = React.createContext();

// const initialState = 0;
// const reducer = (state, action) => {
//   switch (action) {
//     case "increment":
//       return state + 1;
//     case "decrement":
//       return state - 1;
//     case "reset":
//       return initialState;
//     default:
//       return state;
//   }
// };

// function App() {
//   //for global stste management
//   const [count, dispatch] = useReducer(reducer, initialState);

//   return (
//     <div className="App">
//       <h2>HOOKS</h2>
//       <HooksCounter />
//       <HookCounterTwo />
//       <HookForm />
//       <HooksList />
//       <EffectHooksCounter />
//       <HooksMouseDisplay />
//       <IntervalHookCounter />
//       <DataFetching />
//       <SingleDataFetching />

//       <UserContext.Provider value={"shihas"}>
//         <ChannelContext.Provider value={"React Media"}>
//           <ComponentA />
//         </ChannelContext.Provider>
//       </UserContext.Provider>

//       <CounterOne />
//       <MultipleCounter />
//       <MultipleReducerCounter />

//       <CounterContext.Provider
//         value={{ countState: count, countDispatch: dispatch }}
//       >
//         <h3>
//           Sharing Counter State through nested components (Global State
//           Management)
//         </h3>
//         <h4>{count}</h4>
//         <ComponentX />
//       </CounterContext.Provider>

//       <ReducerDataFetching/>
//       <FocusInput/>
//       <IntervalHookCounterTwo/>
//       <CustomForm/>
      
//     </div>
//   );
// }

// export default App;
