import { BASE_URL } from '../../constants/API';

export class OrderController {
  static myOrders(details) {
    return new Promise(async resolve => {
      try {
        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Authorization", "Bearer 12|NLJPEwZ7u48gsQo96qAiLr1eN0tJmOZnVzBFLEkB");

        var formdata = new FormData();
        formdata.append("order_status", details?.status);
        formdata.append("order_date", details?.date);
        formdata.append("amount", details?.anount);
        formdata.append("records", details?.records);
        formdata.append("page", details?.page);

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: formdata,
          redirect: 'follow'
        };

        fetch("https://farvaapp.in/api/myOrders", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
      } catch (error) {
        console.log('catch error', error);
        resolve({ error: error.message });
      }
    });
  }

}
