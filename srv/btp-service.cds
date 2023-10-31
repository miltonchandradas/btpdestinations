using {demo} from '../db/schema';

@path: 'service/btp'
service BTPService {

    entity Employees as select from demo.Employees;

    function getApplications() returns String;
    function getUsers() returns String;
}
