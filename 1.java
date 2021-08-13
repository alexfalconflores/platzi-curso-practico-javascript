class Proyecto {
    private int id;
    private String nombre;
    private String fechaInicio;
    private String fechaFinal;
    private int presupuesto;
    private int horasEstimadas;

    public Proyecto(int id, String nombre, String fechaIncio, String fechaFinal, int presupuesto, int horasEstimadas) {
        this.id = id;
        this.nombre = nombre;
        this.fechaInicio = fechaIncio;
        this.fechaFinal = fechaFinal;
        this.presupuesto = presupuesto;
        this.horasEstimadas = horasEstimadas;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getId() {
        return id;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getNombre() {
        return nombre;
    }

    public void setFechaInicio(String fechaInicio) {
        this.fechaInicio = fechaInicio;
    }

    public String getFechaInicio() {
        return fechaInicio;
    }

    public void setFechaFinal(String fechaFinal) {
        this.fechaFinal = fechaFinal;
    }

    public String getFechaFinal() {
        return fechaFinal;
    }

    public void setPresupuesto(int presupuesto) {
        this.presupuesto = presupuesto;
    }

    public int getPresupuesto() {
        return presupuesto;
    }

    public void setHorasEstimadas(int horasEstimadas) {
        this.horasEstimadas = horasEstimadas;
    }

    public int getHorasEstimadas() {
        return horasEstimadas;
    }
}