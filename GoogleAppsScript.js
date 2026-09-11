/**
 * Google Apps Script for Google Sheet Integration
 * Spreadsheet: Core Unity Solutions - Leads
 * Sheet Columns: Date | CTA | Name | Email | Phone | Form Name | Comments | URL
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    // Append row matching sheet layout:
    // [Date, CTA, Name, Email, Phone, Form Name, Comments, URL]
    sheet.appendRow([
      new Date().toLocaleString("en-US", { timeZone: "Asia/Dubai" }),
      data.formType || "Website Lead",
      data.name || (data.firstName ? ((data.firstName || "") + " " + (data.lastName || "")).trim() : ""),
      data.email || "",
      data.phone || "",
      data.service || data.specialist || data.formType || "",
      data.message || data.question || "Form Submission",
      data.pageUrl || ""
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({ result: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ result: "error", error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({ status: "Active" }))
    .setMimeType(ContentService.MimeType.JSON);
}
