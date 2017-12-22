import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( {
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={OtherPage}></IndexRoute>
      <Route path="Project_Page" component={ProjectPage}>

        <IndexRoute path="Project_Page/Project1" component={Project1} />
        <Route path="Project_Page/Project2" coponent={Project2} />
        <Route path="Project_Page/Project3" coponent={Project3} />
      </Route>
      <Route path="Another_Page" component={AnotherPage}></Route>
    </Route>
  </Route>
  
  document.getElementById('root')
);


export default class ProjectPage extends Component{
  render() {
    return(
      <div>
        <ProjectsNav />
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}


export default class ProjectsNav extends Component{
  render(){
    return(
      <div>
        <Link to="Project_Page/Project1" className="btn btn-primary">Project 1</Link>
        <Link to="Project_Page/Project2" className="btn btn-primary">Project 2</Link>
        <Link to="Project_Page/Project3" className="btn btn-primary">Project 3</Link>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
