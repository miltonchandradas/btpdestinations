using {demo} from '../db/schema';

@path: 'service/btp'
service BTPService {

    entity Employees as projection on demo.Employees;

    function getApplications() returns String;
    function getUsers() returns String;
}
