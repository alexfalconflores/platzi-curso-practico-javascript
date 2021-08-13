class Gasto {
    private int id;
    private String descripcion;
    private int dinero;

    public Gasto(int id, String descripcion, int dinero) {
        this.id = id;
        this.descripcion = descripcion;
        this.dinero = dinero;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getId() {
        return id;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDinero(int dinero) {
        this.dinero = dinero;
    }

    public int getDinero() {
        return dinero;
    }
}
