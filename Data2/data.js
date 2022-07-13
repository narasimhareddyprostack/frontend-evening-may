let Users = [{ "id": 1, "name": "Henrieta", "email": "hcrinidge0@mac.com", "gender": "Female" },
{ "id": 2, "name": "Terencio", "email": "tflett1@cam.ac.uk", "gender": "Male" },
{ "id": 3, "name": "Catherin", "email": "cmcmonnies2@reference.com", "gender": "Bigender" },
{ "id": 4, "name": "Staford", "email": "sreeks3@discuz.net", "gender": "Male" },
{ "id": 5, "name": "Pren", "email": "pgozzett4@cbslocal.com", "gender": "Male" },
{ "id": 6, "name": "Kali", "email": "kcurzon5@hud.gov", "gender": "Female" },
{ "id": 7, "name": "Bernette", "email": "bpoulney6@imdb.com", "gender": "Female" },
{ "id": 8, "name": "Gustaf", "email": "glardier7@yellowpages.com", "gender": "Male" },
{ "id": 9, "name": "Robin", "email": "rgostall8@admin.ch", "gender": "Non-binary" },
{ "id": 10, "name": "Frans", "email": "fsalzburger9@cisco.com", "gender": "Male" },
{ "id": 11, "name": "Huntley", "email": "hrobineta@dropbox.com", "gender": "Male" },
{ "id": 12, "name": "Katrinka", "email": "kkeyserb@sfgate.com", "gender": "Female" },
{ "id": 13, "name": "Clemmie", "email": "coherlihyc@joomla.org", "gender": "Male" },
{ "id": 14, "name": "Grace", "email": "gainsworthd@yahoo.co.jp", "gender": "Female" },
{ "id": 15, "name": "Izaak", "email": "iskulee@senate.gov", "gender": "Male" },
{ "id": 16, "name": "Manon", "email": "mgaulef@tuttocitta.it", "gender": "Genderqueer" },
{ "id": 17, "name": "Ferdinand", "email": "fbeardshawg@wordpress.com", "gender": "Male" },
{ "id": 18, "name": "Web", "email": "wsleneyh@qq.com", "gender": "Male" },
{ "id": 19, "name": "Bat", "email": "btarpleei@devhub.com", "gender": "Male" },
{ "id": 20, "name": "Dev", "email": "ddecourceyj@cdc.gov", "gender": "Agender" },
{ "id": 21, "name": "Launce", "email": "llevingek@nature.com", "gender": "Male" },
{ "id": 22, "name": "Lilla", "email": "lvanichevl@ebay.com", "gender": "Polygender" },
{ "id": 23, "name": "Delano", "email": "dseebertm@constantcontact.com", "gender": "Male" },
{ "id": 24, "name": "Angelique", "email": "aomaran@cnet.com", "gender": "Female" },
{ "id": 25, "name": "Waite", "email": "wvaadelando@wikispaces.com", "gender": "Male" },
{ "id": 26, "name": "Christyna", "email": "ccowellp@ft.com", "gender": "Female" },
{ "id": 27, "name": "Shana", "email": "smackettrickq@symantec.com", "gender": "Female" },
{ "id": 28, "name": "Kore", "email": "krittmeyerr@google.co.jp", "gender": "Female" },
{ "id": 29, "name": "Agata", "email": "awaters@godaddy.com", "gender": "Female" },
{ "id": 30, "name": "Terrill", "email": "tbradmant@accuweather.com", "gender": "Non-binary" },
{ "id": 31, "name": "Zack", "email": "zsantarelliu@apache.org", "gender": "Male" },
{ "id": 32, "name": "Desi", "email": "dtydemanv@360.cn", "gender": "Male" },
{ "id": 33, "name": "Melina", "email": "mcaberaw@mapquest.com", "gender": "Female" },
{ "id": 34, "name": "Brandy", "email": "blinsayx@state.gov", "gender": "Male" },
{ "id": 35, "name": "Drucie", "email": "dpleadeny@tinyurl.com", "gender": "Female" },
{ "id": 36, "name": "Warner", "email": "wsachnoz@elpais.com", "gender": "Male" },
{ "id": 37, "name": "Cristi", "email": "cskitch10@blogtalkradio.com", "gender": "Female" },
{ "id": 38, "name": "Lammond", "email": "lberndt11@china.com.cn", "gender": "Male" },
{ "id": 39, "name": "Harry", "email": "hrivilis12@quantcast.com", "gender": "Male" },
{ "id": 40, "name": "Ezra", "email": "evandriel13@cbsnews.com", "gender": "Bigender" },
{ "id": 41, "name": "Korney", "email": "kmulvany14@sciencedaily.com", "gender": "Genderqueer" },
{ "id": 42, "name": "Orion", "email": "ostuckley15@pagesperso-orange.fr", "gender": "Male" },
{ "id": 43, "name": "Saunder", "email": "sdaldry16@youtube.com", "gender": "Male" },
{ "id": 44, "name": "Keene", "email": "krentenbeck17@sciencedirect.com", "gender": "Male" },
{ "id": 45, "name": "Marion", "email": "mhevner18@tinypic.com", "gender": "Male" },
{ "id": 46, "name": "Rhetta", "email": "rbyng19@newsvine.com", "gender": "Bigender" },
{ "id": 47, "name": "Brant", "email": "bbayley1a@google.nl", "gender": "Male" },
{ "id": 48, "name": "Maddie", "email": "mlegg1b@uiuc.edu", "gender": "Female" },
{ "id": 49, "name": "Wilmette", "email": "wtumpane1c@dropbox.com", "gender": "Polygender" },
{ "id": 50, "name": "Zandra", "email": "zmattsson1d@feedburner.com", "gender": "Female" }]

function display_Users() {
    let rows = ""
    for (user of Users) {
        rows = rows + ` <tr>
                          <td>${user.id}</td>
                          <td>${user.name}</td>
                          <td>${user.email}</td>
                          <td>${user.gender}</td>
                        </tr>`
    }

    document.getElementById('tbody_Data').innerHTML = rows
}