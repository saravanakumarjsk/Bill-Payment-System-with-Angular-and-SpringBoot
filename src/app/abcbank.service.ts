import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AbcbankService {

  constructor(private http: HttpClient) { }

  // get the login page details
  public getLoginDetails(data: any) {
    return this.http.post("http://localhost:4444/abcbank/loginDetails", data);
  }

  public getCustomerRegDetailsById(customer_id: number) {
    return this.http.get("http://localhost:4444/abcbank/getCustomerById/" + customer_id);
  }

  public getOneCustomerById(customer_id: number) {
    return this.http.get("http://localhost:4444/abcbank/getOneCustomerById/" + customer_id);
  }

  public updateCustomerPrefferedAcc(data: any) {
    return this.http.put("http://localhost:4444/abcbank/updateCustAcc", data);
  }

  // ================================ add new biller =====================================================

  public addNewBiller(data: any) {
    return this.http.post("http://localhost:4444/abcbank/addBiller", data);
  }

  public getAllBillersByCustId(customer_id: number) {
    // console.log(customer_id);
    return this.http.get("http://localhost:4444/abcbank/getAllBillerByCustID/" + customer_id);

  }

  // ==================================== update biller data =============================================

  public getBillerByBillerId(biller_id: number) {
    return this.http.get("http://localhost:4444/abcbank/getBillerByBillerId/" + biller_id);
  }

  public updateBiller(data: any) {
    return this.http.put("http://localhost:4444/abcbank/updateBillerDetails", data);
  }

  // =============================== payment instructions ============================================

  public getCustPrefAccById(customer_id: number) {
    return this.http.get("http://localhost:4444/abcbank/getCustomerPrefAccById/" + customer_id);
  }

  public getCustPrefAccBal(customer_id: number) {
    return this.http.get("http://localhost:4444/abcbank/getCustomerPrefAccBal/" + customer_id);
  }

  public getBillerNameByCustId(customer_id: number) {
    return this.http.get("http://localhost:4444/abcbank/getBillerNameByCustId/" + customer_id);
  }

  public getBalByAccNum(acc_num: number) {
    return this.http.get("http://localhost:4444/abcbank/getBalByAccNum/" + acc_num);
  }

  public getBillerIdByBillerName(biller_name: String){
    return this.http.get("http://localhost:4444/abcbank/getBillerIdByBillerName/" + biller_name);
  }

  public insertPaymentDetails(data: any){
    return this.http.post("http://localhost:4444/abcbank/insertMakePayment", data);
  }

  // =============================================== view payment history ====================================
  public getPmtCategoreyByCustId(customer_id: number){
    return this.http.get("http://localhost:4444/abcbank/getPmtCategoreyByCustId/" + customer_id);
  } 
  
  public getPmtStatusByCustId(customer_id: number){
    return this.http.get("http://localhost:4444/abcbank/getPaymentStatusByCustId/" + customer_id);
  } 

  public getHistoryTableByCustId(customer_id: number){
    return this.http.get("http://localhost:4444/abcbank/gehistoryTableDataByCustId/" + customer_id);
  } 
  
  // ====================================== payment instruction details ==========================

  public getPymtDetailsById(customer_id: number){
    return this.http.get("http://localhost:4444/abcbank/getPymtDetailsById/" + customer_id);
  } 

  public updatePymtByBillNum(data: any) {
    return this.http.put("http://localhost:4444/abcbank/updatePymtByBillNum", data);
  }

  public deletePymtById(id: number){
    return this.http.get("http://localhost:4444/abcbank/deletePymtById/" + id);
  }
    

}
