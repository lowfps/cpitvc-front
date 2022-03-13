export class Ingeniero {
    public cod_usuario: number;
    public cod_rol: number;
    public nombre_usuario: string;
    public correo_usuario: string;
    public clave_usuario: string;


    constructor(cod_usuario: number, cod_rol: number, nombre_usuario: string, correo_usuario: string, clave_usuario: string) {
        this.cod_usuario = cod_usuario;
        this.cod_rol = cod_rol;
        this.nombre_usuario = nombre_usuario;
        this.correo_usuario = correo_usuario;
        this.clave_usuario = clave_usuario;

    }
}
