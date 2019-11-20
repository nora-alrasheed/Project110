package edu.ucsd.cs110.temperature;

public class Fahrenheit extends Temperature
{
    public Fahrenheit(float t)
    {
        super(t);
    }

    @Override
    public Temperature toCelsius() {
        Temperature x = new Fahrenheit( (this.getValue() -32) / 1.8f );
        return x;
    }

    @Override
    public Temperature toFahrenheit() {
        //Temperature x = new Fahrenheit( (this.getValue() / 1.8f )-32);
        //return x;
        return this;
    }

    public String toString()
    {
        // TODO: Complete this method
        return this.getValue() + " F";
    }
}
