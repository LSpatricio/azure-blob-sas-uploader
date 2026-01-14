import * as path from "path";
import { FileUploadService } from "./FileUploadService";
import { HttpService } from "./httpService";

//Nomrbearchivo, contenedor.
const blobName = "reporte_prueba.pdf";
const correos="luis.patriciomu@gmail.com";
const rutaCarpeta ="/home/lpatricio/proyectosts";
const logicAppUrl="https://prod-11.southcentralus.logic.azure.com:443/workflows/63f27ac94e2f42978b7ecabe01a678b6/triggers/When_an_HTTP_request_is_received/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2FWhen_an_HTTP_request_is_received%2Frun&sv=1.0&sig=ntaxtZGx4rOZvEGT9eTuNnexJPYzyPFZnmT352MpTqU";

const containerSasUrl =
  "https://stlabsoinf.blob.core.windows.net/test-ragasa/"+blobName+"?sp=racwd&st=2026-01-13T22:37:51Z&se=2026-03-31T06:52:51Z&spr=https&sv=2024-11-04&sr=c&sig=zyfcodcsG9CGfI2ZscmkhwNvUZdi3DE2uD1VCEyVbiU%3D";
// Ruta local del PDF
const rutaArchivo = path.join(rutaCarpeta, blobName);

async function main() {
const uploadService = new FileUploadService(containerSasUrl);
const httpService = new HttpService();

uploadService.uploadPdf(rutaArchivo).catch(console.error);

  console.log("✅ PDF subido correctamente");

httpService.postJson(logicAppUrl, {
  destinatario: correos,
  nombreArchivo: blobName,
});

}

main().catch(console.error);

