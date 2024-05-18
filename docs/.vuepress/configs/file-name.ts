import * as fs from 'fs';
import * as path from 'path';

/**
 * 获取 文件夹下的所有文件名
 * @param folderPath  文件夹路径
 * @param splicingPath  拼接路径
 * @returns 
 */
export const getFileNames = (folderPath: string, splicingPath: string) =>{
    // 指定文件夹路径
    let FilesPath:string[] = []
    const newfolderPath = path.join(__dirname, folderPath); // 替换 'your-folder-name' 为实际文件夹名称
    // 读取文件夹内容
    fs.readdir(newfolderPath, (err, files) => {
      if (err) {
        console.error('Error reading directory:', err);
        return;
      }
      // 输出所有文件名
      files.forEach(file => {
        FilesPath.push(`${splicingPath}/${file}`)
      });
    });
    return FilesPath
}