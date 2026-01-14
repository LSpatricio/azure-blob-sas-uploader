import * as path from "path";
import { FileUploadService } from "./FileUploadService";

//Nomrbearchivo, contenedor.
const blobName = "reporte_prueba.pdf";
const rutaCarpeta ="/home/lpatricio/proyectosts";


const containerSasUrl =
  "https://stlabsoinf.blob.core.windows.net/test-ragasa/"+blobName+"?sp=racwd&st=2026-01-13T22:37:51Z&se=2026-03-31T06:52:51Z&spr=https&sv=2024-11-04&sr=c&sig=zyfcodcsG9CGfI2ZscmkhwNvUZdi3DE2uD1VCEyVbiU%3D";
// Ruta local del PDF
const rutaArchivo = path.join(rutaCarpeta, blobName);

async function main() {
const uploadService = new FileUploadService(containerSasUrl);

uploadService.uploadPdf(rutaArchivo).catch(console.error);

  console.log("✅ PDF subido correctamente");
}

main().catch(console.error);

