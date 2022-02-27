import FeatureForm from './FeatureForm';
import PersonForm from './PersonForm';

function Admin() {
    return (
        <div>
            Admin <br/>
            special login <br/>
            control <br/>
            manuaally add new persons <br/>
            <div>
                <PersonForm />
            </div>
            connect emails accounts <br/>
            remove google accounts <br/>
            add faetures and their scoring <br/>
            <div>
                <FeatureForm />
            </div>
            control the accelerate and ecelerate values <br/>
            ...
        </div>
    );
  }
  
  export default Admin;
  