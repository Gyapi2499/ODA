/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hu.elte.oda.services;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Date;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.apache.commons.io.FileUtils;
import org.apache.commons.io.FilenameUtils;
import org.apache.commons.lang3.RandomStringUtils;

/**
 *
 * @author palii
 */
@Service
@Log4j2
public class ImageService {
    @Value("${oda.image.location}")
	private String directory;
    public String upload(MultipartFile file){
        String localFileName = "";
        if(file!=null){
            try{
                String folderName = (new Date()).toString();
                String path =directory+"/"+folderName;
                String extension = FilenameUtils.getExtension(file.getOriginalFilename());
		String date = new SimpleDateFormat("yyyymmdd_HHmmss").format(new Date());
                String fileName = date + "_" + RandomStringUtils.randomAlphanumeric(10) + "." + extension;
		File localFile = new File(path, fileName);
		file.transferTo(localFile);
                localFileName = folderName + "/" + fileName;
            }catch(Exception e){
                log.error(e);
            }
        }
        return localFileName;
    }
}
