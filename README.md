# GoombaGeek
A E-commerce relationated with a amiibos api
# Getting Started
Clona el repositorio a tu computadora 
instalá los componentes con Yarn o tu compilador de paquetes favorito.
# Configuración de SDK
Dentro de la carpeta Android hay un archivo llamado local.properties , dentro de ella debes configurar donde está tu SDK 
Android , <b>Es muy importante</b> configurar esto , para que la aplicación corrá correctamente.
<b> Se debe considerar correr por Android ya que no se configuró para IOS ya que no dispongo de MAC 
para correr en está plataforma</b>
# Detalles
La  Api es bastante extensa por lo cual al momento de ingresar ,limite la conexión a que trajiera solamente 20 productos.
si deseas ampliar tu busqueda debes modificar el Slice que está en la vista de HomeScreen.<b>Especificamente la linea 49 </b>
 setGetAllProducts(result.slice(0, 20));
