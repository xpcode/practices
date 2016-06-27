/**
 * Created by c on 16/3/21.
 */
import { Route, IndexRoute } from 'react-router'
import IndexPage from 'containers'
import LoginPage from 'containers/__demo/Login'
import TablePage from 'containers/__demo/Table'
import MasterPage from 'containers/Master/Default'
import Error_404 from 'containers/Error/404'

export default (
    <Route path="/">
        <Route path="__demo" component={MasterPage}>
            <Route path="login" component={LoginPage}/>
            <Route path="table" component={TablePage}/>
        </Route>
        <Route path="*" component={Error_404}/>
    </Route>
)