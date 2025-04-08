# Information Security with HelmetJS - BCrypt

**Autor**
# Karem Alitzel Oropeza Yañez
**Carrera: Ingenieria en Sistemas Computacionales /**
**No. Control: 211150068 /**
**Semestre: 8 /**

# Proposito
Proteger contraseñas de usuarios mediante el uso de hashes seguros con BCrypt. Se aprende a generar hashes y compararlos tanto de forma sincrónica como asincrónica, evitando el almacenamiento de contraseñas en texto plano.
# Utilidad
Aplicar buenas prácticas de seguridad en la autenticación, protegiendo los datos sensibles ante posibles filtraciones, y cumpliendo con los estándares modernos de desarrollo seguro en aplicaciones web, util para desarrolladores web, administradores de sistemas y aspirantes a especialistas en ciberseguridad.
# Metodología
**Comprensión de los Hashes con BCrypt (Understand BCrypt Hashes)**
Bcrypt, una librería robusta diseñada específicamente para proteger contraseñas, se importa en el entorno de desarrollo y se define una constante para indicar el número de rondas de salting (12), que determina la complejidad del proceso de cifrado. 
**Hash y Comparación Asíncrona de Contraseñas (Hash and Compare Passwords Asynchronously)**
Implementa la función de hash utilizando el método bcrypt.hash() con una interfaz asíncrona basada en callbacks o async/await.  Se define una cadena de texto que representa la contraseña original. Posteriormente, se cifra utilizando las rondas de sal previamente definidas. Una vez obtenido el hash, se emplea bcrypt.compare() para verificar si la contraseña original corresponde con el hash generado, asegurando la validez sin necesidad de descifrarlo (ya que bcrypt es unidireccional).
**Hash y Comparación Síncrona de Contraseñas (Hash and Compare Passwords Synchronously)**
Finalmente, se ejecuta el mismo proceso de hashing y comparación de contraseñas, pero utilizando los métodos sincrónicos: bcrypt.hashSync() y bcrypt.compareSync(). A diferencia del método anterior, esta estrategia bloquea el hilo de ejecución hasta completar el proceso, por lo cual se recomienda solo en contextos donde el rendimiento no sea crítico o durante pruebas locales y scripts utilitarios.