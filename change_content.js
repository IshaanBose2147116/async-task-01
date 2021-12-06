let mainPageContent = `
    <div class="main-page-container">
        <h1>Main Page</h1>
        <p>
            This is the main page of the website. <br/><br/>
            This website contains information about the various classes provided at CHRIST (Deemed to be University). You will be able to find 
            information about the various sections of the classes along with the faculty members in charge, and the students enrolled in the
            respective classes. <br/><br/>
            In order to view information about a specific class, click one of the links provided.
        </p>
    </div>
`;

let csPageContent = `
    <div class="cs-page-container">
        <h1>CS Faculty & Student List:</h1>
        <ol type="I">
            <li>Section A</li>
            <ul>
                <li>Rachana Mahala Benton</li>
                <li>Neelima Rhys Caldwell</li>
                <li>Nikita Choudhary</li>
                <li>Akhil Nagarkar</li>
                <li>Nishant Joshi</li>
                <li class="li-student-table">
                    <table border="1" class="student-table table1">
                        <caption>Student Details</caption>
                        <tr>
                            <th>Reg. No.</th>
                            <th>Name</th>
                            <th>Father Name</th>
                            <th>Class</th>
                            <th>Admission Date</th>
                        </tr>
                        <tr>
                            <td>2013001</td>
                            <td>Justin</td>
                            <td>Devdas</td>
                            <td>4 MCA</td>
                            <td>2020-03-21</td>
                        </tr>
                        <tr>
                            <td>2013002</td>
                            <td>Ritu</td>
                            <td>Cole</td>
                            <td>4 MCA</td>
                            <td>2020-03-20</td>
                        </tr>
                        <tr>
                            <td>2013003</td>
                            <td>Omar</td>
                            <td>Ratan</td>
                            <td>4 MCA</td>
                            <td>2020-03-19</td>
                        </tr>
                        <tr>
                            <td>2013004</td>
                            <td>Shyama</td>
                            <td>Abhay</td>
                            <td>4 MCA</td>
                            <td>2020-03-21</td>
                        </tr>
                        <tr>
                            <td>2013005</td>
                            <td>Jung-Sook</td>
                            <td>Ji-Hoon</td>
                            <td>4 MCA</td>
                            <td>2020-03-20</td>
                        </tr>
                        <tr>
                            <td>2013006</td>
                            <td>Jayant</td>
                            <td>Veda</td>
                            <td>4 MCA</td>
                            <td>2020-03-21</td>
                        </tr>
                        <tr>
                            <td>2013007</td>
                            <td>Nalini</td>
                            <td>Ila</td>
                            <td>4 MCA</td>
                            <td>2020-03-18</td>
                        </tr>
                        <tr>
                            <td>2013008</td>
                            <td>Brijesh</td>
                            <td>Aravind</td>
                            <td>4 MCA</td>
                            <td>2020-03-20</td>
                        </tr>
                    </table>
                </li>
            </ul>
            <li>Section B</li>
            <ul>
                <li>Aniket Kulkarni</li>
                <li>Sarita Chaudri</li>
                <li>Nikita Choudhary</li>
                <li>Kalpana D'Cruz</li>
                <li>Vinay Ahmad</li>
                <li class="li-student-table">
                    <table border="1" class="student-table table2">
                        <caption>Student Details</caption>
                        <tr>
                            <th>Reg. No.</th>
                            <th>Name</th>
                            <th>Father Name</th>
                            <th>Class</th>
                            <th>Admission Date</th>
                        </tr>
                        <tr>
                            <td>2013011</td>
                            <td>Clyde</td>
                            <td>Terrance</td>
                            <td>4 MCA</td>
                            <td>2020-03-21</td>
                        </tr>
                        <tr>
                            <td>2013012</td>
                            <td>Elena</td>
                            <td>Ethel</td>
                            <td>4 MCA</td>
                            <td>2020-03-20</td>
                        </tr>
                        <tr>
                            <td>2013013</td>
                            <td>Rajani</td>
                            <td>Prashant</td>
                            <td>4 MCA</td>
                            <td>2020-03-19</td>
                        </tr>
                        <tr>
                            <td>2013014</td>
                            <td>Puja</td>
                            <td>Prasad</td>
                            <td>4 MCA</td>
                            <td>2020-03-21</td>
                        </tr>
                        <tr>
                            <td>2013015</td>
                            <td>Shubham</td>
                            <td>Pravin</td>
                            <td>4 MCA</td>
                            <td>2020-03-20</td>
                        </tr>
                        <tr>
                            <td>2013016</td>
                            <td>Jai</td>
                            <td>Abhay</td>
                            <td>4 MCA</td>
                            <td>2020-03-21</td>
                        </tr>
                        <tr>
                            <td>2013017</td>
                            <td>Rakhi</td>
                            <td>Jaywant</td>
                            <td>4 MCA</td>
                            <td>2020-03-18</td>
                        </tr>
                        <tr>
                            <td>2013018</td>
                            <td>Pooja</td>
                            <td>Vihaan</td>
                            <td>4 MCA</td>
                            <td>2020-03-20</td>
                        </tr>
                    </table>
                </li>
            </ul>
        </ol>
    </div>
`;

let mathsStatsPageContent = `
    <div class="cs-page-container">
        <h1>Maths & Statistics Faculty & Student List:</h1>
        <ol type="I">
            <li>Section A</li>
            <ul>
                <li>Rachana Mahala Benton</li>
                <li>Neelima Rhys Caldwell</li>
                <li>Nikita Choudhary</li>
                <li>Akhil Nagarkar</li>
                <li>Nishant Joshi</li>
                <li class="li-student-table">
                    <table border="1" class="student-table table1">
                        <caption>Student Details</caption>
                        <tr>
                            <th>Reg. No.</th>
                            <th>Name</th>
                            <th>Father Name</th>
                            <th>Class</th>
                            <th>Admission Date</th>
                        </tr>
                        <tr>
                            <td>2102301</td>
                            <td>Justin</td>
                            <td>Devdas</td>
                            <td>4 MTST</td>
                            <td>2020-03-21</td>
                        </tr>
                        <tr>
                            <td>2102302</td>
                            <td>Ritu</td>
                            <td>Cole</td>
                            <td>4 MTST</td>
                            <td>2020-03-20</td>
                        </tr>
                        <tr>
                            <td>2102303</td>
                            <td>Omar</td>
                            <td>Ratan</td>
                            <td>4 MTST</td>
                            <td>2020-03-19</td>
                        </tr>
                        <tr>
                            <td>2102304</td>
                            <td>Shyama</td>
                            <td>Abhay</td>
                            <td>4 MTST</td>
                            <td>2020-03-21</td>
                        </tr>
                        <tr>
                            <td>2102305</td>
                            <td>Jung-Sook</td>
                            <td>Ji-Hoon</td>
                            <td>4 MTST</td>
                            <td>2020-03-20</td>
                        </tr>
                        <tr>
                            <td>2102306</td>
                            <td>Jayant</td>
                            <td>Veda</td>
                            <td>4 MTST</td>
                            <td>2020-03-21</td>
                        </tr>
                        <tr>
                            <td>2102307</td>
                            <td>Nalini</td>
                            <td>Ila</td>
                            <td>4 MTST</td>
                            <td>2020-03-18</td>
                        </tr>
                        <tr>
                            <td>2102308</td>
                            <td>Brijesh</td>
                            <td>Aravind</td>
                            <td>4 MTST</td>
                            <td>2020-03-20</td>
                        </tr>
                    </table>
                </li>
            </ul>
            <li>Section B</li>
            <ul>
                <li>Aniket Kulkarni</li>
                <li>Sarita Chaudri</li>
                <li>Nikita Choudhary</li>
                <li>Kalpana D'Cruz</li>
                <li>Vinay Ahmad</li>
                <li class="li-student-table">
                    <table border="1" class="student-table table2">
                        <caption>Student Details</caption>
                        <tr>
                            <th>Reg. No.</th>
                            <th>Name</th>
                            <th>Father Name</th>
                            <th>Class</th>
                            <th>Admission Date</th>
                        </tr>
                        <tr>
                            <td>2102311</td>
                            <td>Clyde</td>
                            <td>Terrance</td>
                            <td>4 MTST</td>
                            <td>2020-03-21</td>
                        </tr>
                        <tr>
                            <td>2102312</td>
                            <td>Elena</td>
                            <td>Ethel</td>
                            <td>4 MTST</td>
                            <td>2020-03-20</td>
                        </tr>
                        <tr>
                            <td>2102313</td>
                            <td>Rajani</td>
                            <td>Prashant</td>
                            <td>4 MTST</td>
                            <td>2020-03-19</td>
                        </tr>
                        <tr>
                            <td>2102314</td>
                            <td>Puja</td>
                            <td>Prasad</td>
                            <td>4 MTST</td>
                            <td>2020-03-21</td>
                        </tr>
                        <tr>
                            <td>2102315</td>
                            <td>Shubham</td>
                            <td>Pravin</td>
                            <td>4 MTST</td>
                            <td>2020-03-20</td>
                        </tr>
                        <tr>
                            <td>2102316</td>
                            <td>Jai</td>
                            <td>Abhay</td>
                            <td>4 MTST</td>
                            <td>2020-03-21</td>
                        </tr>
                        <tr>
                            <td>2102317</td>
                            <td>Rakhi</td>
                            <td>Jaywant</td>
                            <td>4 MTST</td>
                            <td>2020-03-18</td>
                        </tr>
                        <tr>
                            <td>2102318</td>
                            <td>Pooja</td>
                            <td>Vihaan</td>
                            <td>4 MTST</td>
                            <td>2020-03-20</td>
                        </tr>
                    </table>
                </li>
            </ul>
        </ol>
        <table border="1">
            <tr>
                <th>Faculty Count:</th>
                <td>10</td>
            </tr>
            <tr>
                <th>Student Count:</th>
                <td>16</td>
            </tr>
        </table>
    </div>
`;

let chemistryPageContent = `
<div class="cs-page-container">
    <h1>Chemistry Faculty & Student List:</h1>
    <ol type="I">
        <li>Section A</li>
        <ul>
            <li>Rachana Mahala Benton</li>
            <li>Neelima Rhys Caldwell</li>
            <li>Nikita Choudhary</li>
            <li>Akhil Nagarkar</li>
            <li>Nishant Joshi</li>
            <li class="li-student-table">
                <table border="1" class="student-table table1">
                    <caption>Student Details</caption>
                    <tr>
                        <th>Reg. No.</th>
                        <th>Name</th>
                        <th>Father Name</th>
                        <th>Class</th>
                        <th>Admission Date</th>
                    </tr>
                    <tr>
                        <td>2012801</td>
                        <td>Justin</td>
                        <td>Devdas</td>
                        <td>4 CHEM</td>
                        <td>2020-03-21</td>
                    </tr>
                    <tr>
                        <td>2012802</td>
                        <td>Ritu</td>
                        <td>Cole</td>
                        <td>4 CHEM</td>
                        <td>2020-03-20</td>
                    </tr>
                    <tr>
                        <td>2012803</td>
                        <td>Omar</td>
                        <td>Ratan</td>
                        <td>4 CHEM</td>
                        <td>2020-03-19</td>
                    </tr>
                    <tr>
                        <td>2012804</td>
                        <td>Shyama</td>
                        <td>Abhay</td>
                        <td>4 CHEM</td>
                        <td>2020-03-21</td>
                    </tr>
                    <tr>
                        <td>2012805</td>
                        <td>Jung-Sook</td>
                        <td>Ji-Hoon</td>
                        <td>4 CHEM</td>
                        <td>2020-03-20</td>
                    </tr>
                    <tr>
                        <td>2012806</td>
                        <td>Jayant</td>
                        <td>Veda</td>
                        <td>4 CHEM</td>
                        <td>2020-03-21</td>
                    </tr>
                    <tr>
                        <td>2012807</td>
                        <td>Nalini</td>
                        <td>Ila</td>
                        <td>4 CHEM</td>
                        <td>2020-03-18</td>
                    </tr>
                    <tr>
                        <td>2012808</td>
                        <td>Brijesh</td>
                        <td>Aravind</td>
                        <td>4 CHEM</td>
                        <td>2020-03-20</td>
                    </tr>
                </table>
            </li>
        </ul>
        <li>Section B</li>
        <ul>
            <li>Aniket Kulkarni</li>
            <li>Sarita Chaudri</li>
            <li>Nikita Choudhary</li>
            <li>Kalpana D'Cruz</li>
            <li>Vinay Ahmad</li>
            <li class="li-student-table">
                <table border="1" class="student-table table2">
                    <caption>Student Details</caption>
                    <tr>
                        <th>Reg. No.</th>
                        <th>Name</th>
                        <th>Father Name</th>
                        <th>Class</th>
                        <th>Admission Date</th>
                    </tr>
                    <tr>
                        <td>2012811</td>
                        <td>Clyde</td>
                        <td>Terrance</td>
                        <td>4 CHEM</td>
                        <td>2020-03-21</td>
                    </tr>
                    <tr>
                        <td>2012812</td>
                        <td>Elena</td>
                        <td>Ethel</td>
                        <td>4 CHEM</td>
                        <td>2020-03-20</td>
                    </tr>
                    <tr>
                        <td>2012813</td>
                        <td>Rajani</td>
                        <td>Prashant</td>
                        <td>4 CHEM</td>
                        <td>2020-03-19</td>
                    </tr>
                    <tr>
                        <td>2012814</td>
                        <td>Puja</td>
                        <td>Prasad</td>
                        <td>4 CHEM</td>
                        <td>2020-03-21</td>
                    </tr>
                    <tr>
                        <td>2012815</td>
                        <td>Shubham</td>
                        <td>Pravin</td>
                        <td>4 CHEM</td>
                        <td>2020-03-20</td>
                    </tr>
                    <tr>
                        <td>2012816</td>
                        <td>Jai</td>
                        <td>Abhay</td>
                        <td>4 CHEM</td>
                        <td>2020-03-21</td>
                    </tr>
                    <tr>
                        <td>2012817</td>
                        <td>Rakhi</td>
                        <td>Jaywant</td>
                        <td>4 CHEM</td>
                        <td>2020-03-18</td>
                    </tr>
                    <tr>
                        <td>2012818</td>
                        <td>Pooja</td>
                        <td>Vihaan</td>
                        <td>4 CHEM</td>
                        <td>2020-03-20</td>
                    </tr>
                </table>
            </li>
        </ul>
    </ol>
</div>
`;

let physicsPageContent = `
<div class="cs-page-container">
    <h1>Physics Faculty & Student List:</h1>
    <ol type="I">
        <li>Section A</li>
        <ul>
            <li>Rachana Mahala Benton</li>
            <li>Neelima Rhys Caldwell</li>
            <li>Nikita Choudhary</li>
            <li>Akhil Nagarkar</li>
            <li>Nishant Joshi</li>
            <li class="li-student-table">
                <table border="1" class="student-table table1">
                    <caption>Student Details</caption>
                    <tr>
                        <th>Reg. No.</th>
                        <th>Name</th>
                        <th>Father Name</th>
                        <th>Class</th>
                        <th>Admission Date</th>
                    </tr>
                    <tr>
                        <td>2018801</td>
                        <td>Justin</td>
                        <td>Devdas</td>
                        <td>4 PHY</td>
                        <td>2020-03-21</td>
                    </tr>
                    <tr>
                        <td>2018802</td>
                        <td>Ritu</td>
                        <td>Cole</td>
                        <td>4 PHY</td>
                        <td>2020-03-20</td>
                    </tr>
                    <tr>
                        <td>2018803</td>
                        <td>Omar</td>
                        <td>Ratan</td>
                        <td>4 PHY</td>
                        <td>2020-03-19</td>
                    </tr>
                    <tr>
                        <td>2018804</td>
                        <td>Shyama</td>
                        <td>Abhay</td>
                        <td>4 PHY</td>
                        <td>2020-03-21</td>
                    </tr>
                    <tr>
                        <td>2018805</td>
                        <td>Jung-Sook</td>
                        <td>Ji-Hoon</td>
                        <td>4 PHY</td>
                        <td>2020-03-20</td>
                    </tr>
                    <tr>
                        <td>2018806</td>
                        <td>Jayant</td>
                        <td>Veda</td>
                        <td>4 PHY</td>
                        <td>2020-03-21</td>
                    </tr>
                    <tr>
                        <td>2018807</td>
                        <td>Nalini</td>
                        <td>Ila</td>
                        <td>4 PHY</td>
                        <td>2020-03-18</td>
                    </tr>
                    <tr>
                        <td>2018808</td>
                        <td>Brijesh</td>
                        <td>Aravind</td>
                        <td>4 PHY</td>
                        <td>2020-03-20</td>
                    </tr>
                </table>
            </li>
        </ul>
        <li>Section B</li>
        <ul>
            <li>Aniket Kulkarni</li>
            <li>Sarita Chaudri</li>
            <li>Nikita Choudhary</li>
            <li>Kalpana D'Cruz</li>
            <li>Vinay Ahmad</li>
            <li class="li-student-table">
                <table border="1" class="student-table table2">
                    <caption>Student Details</caption>
                    <tr>
                        <th>Reg. No.</th>
                        <th>Name</th>
                        <th>Father Name</th>
                        <th>Class</th>
                        <th>Admission Date</th>
                    </tr>
                    <tr>
                        <td>2018811</td>
                        <td>Clyde</td>
                        <td>Terrance</td>
                        <td>4 PHY</td>
                        <td>2020-03-21</td>
                    </tr>
                    <tr>
                        <td>2018812</td>
                        <td>Elena</td>
                        <td>Ethel</td>
                        <td>4 PHY</td>
                        <td>2020-03-20</td>
                    </tr>
                    <tr>
                        <td>2018813</td>
                        <td>Rajani</td>
                        <td>Prashant</td>
                        <td>4 PHY</td>
                        <td>2020-03-19</td>
                    </tr>
                    <tr>
                        <td>2018814</td>
                        <td>Puja</td>
                        <td>Prasad</td>
                        <td>4 PHY</td>
                        <td>2020-03-21</td>
                    </tr>
                    <tr>
                        <td>2018815</td>
                        <td>Shubham</td>
                        <td>Pravin</td>
                        <td>4 PHY</td>
                        <td>2020-03-20</td>
                    </tr>
                    <tr>
                        <td>2018816</td>
                        <td>Jai</td>
                        <td>Abhay</td>
                        <td>4 PHY</td>
                        <td>2020-03-21</td>
                    </tr>
                    <tr>
                        <td>2018817</td>
                        <td>Rakhi</td>
                        <td>Jaywant</td>
                        <td>4 PHY</td>
                        <td>2020-03-18</td>
                    </tr>
                    <tr>
                        <td>2018818</td>
                        <td>Pooja</td>
                        <td>Vihaan</td>
                        <td>4 PHY</td>
                        <td>2020-03-20</td>
                    </tr>
                </table>
            </li>
        </ul>
    </ol>
</div>
`;

let lawPageContent = `
<div class="cs-page-container">
    <h1>Law Faculty & Student List:</h1>
    <ol type="I">
        <li>Section A</li>
        <ul>
            <li>Rachana Mahala Benton</li>
            <li>Neelima Rhys Caldwell</li>
            <li>Nikita Choudhary</li>
            <li>Akhil Nagarkar</li>
            <li>Nishant Joshi</li>
            <li class="li-student-table">
                <table border="1" class="student-table table1">
                    <caption>Student Details</caption>
                    <tr>
                        <th>Reg. No.</th>
                        <th>Name</th>
                        <th>Father Name</th>
                        <th>Class</th>
                        <th>Admission Date</th>
                    </tr>
                    <tr>
                        <td>2883001</td>
                        <td>Justin</td>
                        <td>Devdas</td>
                        <td>4 LAW</td>
                        <td>2020-03-21</td>
                    </tr>
                    <tr>
                        <td>2883002</td>
                        <td>Ritu</td>
                        <td>Cole</td>
                        <td>4 LAW</td>
                        <td>2020-03-20</td>
                    </tr>
                    <tr>
                        <td>2883003</td>
                        <td>Omar</td>
                        <td>Ratan</td>
                        <td>4 LAW</td>
                        <td>2020-03-19</td>
                    </tr>
                    <tr>
                        <td>2883004</td>
                        <td>Shyama</td>
                        <td>Abhay</td>
                        <td>4 LAW</td>
                        <td>2020-03-21</td>
                    </tr>
                    <tr>
                        <td>2883005</td>
                        <td>Jung-Sook</td>
                        <td>Ji-Hoon</td>
                        <td>4 LAW</td>
                        <td>2020-03-20</td>
                    </tr>
                    <tr>
                        <td>2883006</td>
                        <td>Jayant</td>
                        <td>Veda</td>
                        <td>4 LAW</td>
                        <td>2020-03-21</td>
                    </tr>
                    <tr>
                        <td>2883007</td>
                        <td>Nalini</td>
                        <td>Ila</td>
                        <td>4 LAW</td>
                        <td>2020-03-18</td>
                    </tr>
                    <tr>
                        <td>2883008</td>
                        <td>Brijesh</td>
                        <td>Aravind</td>
                        <td>4 LAW</td>
                        <td>2020-03-20</td>
                    </tr>
                </table>
            </li>
        </ul>
        <li>Section B</li>
        <ul>
            <li>Aniket Kulkarni</li>
            <li>Sarita Chaudri</li>
            <li>Nikita Choudhary</li>
            <li>Kalpana D'Cruz</li>
            <li>Vinay Ahmad</li>
            <li class="li-student-table">
                <table border="1" class="student-table table2">
                    <caption>Student Details</caption>
                    <tr>
                        <th>Reg. No.</th>
                        <th>Name</th>
                        <th>Father Name</th>
                        <th>Class</th>
                        <th>Admission Date</th>
                    </tr>
                    <tr>
                        <td>2883011</td>
                        <td>Clyde</td>
                        <td>Terrance</td>
                        <td>4 LAW</td>
                        <td>2020-03-21</td>
                    </tr>
                    <tr>
                        <td>2883012</td>
                        <td>Elena</td>
                        <td>Ethel</td>
                        <td>4 LAW</td>
                        <td>2020-03-20</td>
                    </tr>
                    <tr>
                        <td>2883013</td>
                        <td>Rajani</td>
                        <td>Prashant</td>
                        <td>4 LAW</td>
                        <td>2020-03-19</td>
                    </tr>
                    <tr>
                        <td>2883014</td>
                        <td>Puja</td>
                        <td>Prasad</td>
                        <td>4 LAW</td>
                        <td>2020-03-21</td>
                    </tr>
                    <tr>
                        <td>2883015</td>
                        <td>Shubham</td>
                        <td>Pravin</td>
                        <td>4 LAW</td>
                        <td>2020-03-20</td>
                    </tr>
                    <tr>
                        <td>2883016</td>
                        <td>Jai</td>
                        <td>Abhay</td>
                        <td>4 LAW</td>
                        <td>2020-03-21</td>
                    </tr>
                    <tr>
                        <td>2883017</td>
                        <td>Rakhi</td>
                        <td>Jaywant</td>
                        <td>4 LAW</td>
                        <td>2020-03-18</td>
                    </tr>
                    <tr>
                        <td>2883018</td>
                        <td>Pooja</td>
                        <td>Vihaan</td>
                        <td>4 LAW</td>
                        <td>2020-03-20</td>
                    </tr>
                </table>
            </li>
        </ul>
    </ol>
</div>
`;

function changeContent(page)
{
    var content = null;

    switch (page)
    {
        case "main": content = mainPageContent; break;
        case "cs": content = csPageContent; break;
        case "maths": content = mathsStatsPageContent; break;
        case "chem": content = chemistryPageContent; break;
        case "phy": content = physicsPageContent; break;
        case "law": content = lawPageContent; break;

        default: content = mainPageContent;
    }

    document.getElementById("content-container").innerHTML = content;
    sessionStorage.setItem("current-content", page);
}

function changeContentAJAX(page)
{
    var xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = () => {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById("content-container").innerHTML = this.responseText;
        }
    };

    xhttp.open("GET", "main_page_content.html", true);
    xhttp.send();
}

window.onload = () => {
    if (sessionStorage.getItem("current-content") === null)
        sessionStorage.setItem("current-content", "main");
    
    changeContent(sessionStorage.getItem("current-content"));
};