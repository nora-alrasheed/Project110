package edu.ucsd.cs110.temperature;
public class Celsius extends Temperature
{
    public Celsius(float t)
    {
        super(t);
    }

    @Override
    public Temperature toCelsius() {
        return this;
    }

    @Override
    public Temperature toFahrenheit() {
        Temperature x = new Fahrenheit((1.8f *this.getValue()) + 32);
        return x;
    }

    public String toString()
    {
        // TODO: Complete this method
        //return val + " C";
        return this.getValue() + " C";
    }
}