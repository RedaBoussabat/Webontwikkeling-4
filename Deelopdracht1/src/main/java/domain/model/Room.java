package domain.model;


public enum Room {
    C001("C001",0,5), C002("C002",0,2), C003("C003",0,10), C004("C004",0,5);

    private String description;
    private int amount;
    private int max;

    Room() {
    }

    Room(String description, int amount, int max) {
        this.description = description;
        this.amount = amount;
        this.max = max;
    }

    public String getDescription() {
        return description;
    }

    public int getAmount() {
        return amount;
    }

    public int getMax() {
        return max;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }
}
