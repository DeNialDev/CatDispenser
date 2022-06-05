
#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <WiFiClient.h>
#include "Servo.h"
#define PIN_TRIG D5
#define PIN_ECHO D6

//Nombre de red
const char* nombre = "iPhone";
//Password
const char* password = "Veyrand12";
float tiempo;
float distancia;
WiFiClient client;
WiFiServer server(80);
int ledPin = 13;
int servo_pin = D8;
Servo myServo;
void setup() {
  myServo.attach(servo_pin);
  Serial.begin(115200);
  pinMode(ledPin, OUTPUT);
  digitalWrite(ledPin, LOW);

  Serial.println("Prueba");
  WiFi.begin(nombre, password);
  Serial.print("Conectando...");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("COnexion ok!");
  Serial.println(WiFi.localIP());
  pinMode(PIN_TRIG, OUTPUT);
  pinMode(PIN_ECHO, INPUT);
  server.begin();
  myServo.write(0);
}
void loop() {
  digitalWrite(PIN_TRIG, LOW);  //para generar un pulso limpio ponemos a LOW 4us
  delayMicroseconds(4);

  digitalWrite(PIN_TRIG, HIGH);  //generamos Trigger (disparo) de 10us
  delayMicroseconds(10);
  digitalWrite(PIN_TRIG, LOW);
  HTTPClient http;
  
  tiempo = pulseIn(PIN_ECHO, HIGH);
  distancia = tiempo / 58.3;
  if (distancia > 20) {
    
    Serial.println("Plato vacio");
    if (WiFi.status() == WL_CONNECTED) {
      
      String datos = "dispenser=" + String("VACIO");
      http.begin(client, "http://multidisp.000webhostapp.com/DispenserUpdate.php");
      http.addHeader("Content-Type", "application/x-www-form-urlencoded");
      int response = http.POST(datos);
      if (response > 0) {
        Serial.println("HTTP" + String(response));
        if (response == 200) {
          String bodyResponse = http.getString();
          Serial.println("Server response" + bodyResponse);
        }
      } else {
        Serial.println(response);
      }
      http.end();
    } else {
      Serial.println("Error");
    }

  } else {
    led();
    Serial.println("Plato lleno");
    
     
        if (WiFi.status() == WL_CONNECTED) {
      
      String datos = "dispenser=" + String("LLENO");
      http.begin(client, "http://multidispositivos.000webhostapp.com/DispenserUpdate.php");
      http.addHeader("Content-Type", "application/x-www-form-urlencoded");
      int response = http.POST(datos);
      if (response > 0) {
        Serial.println("HTTP" + String(response));
        if (response == 200) {
          String bodyResponse = http.getString();
          Serial.println("Server response" + bodyResponse);
        }
      } else {
        Serial.println(response);
      }
      http.end();
    } else {
      Serial.println("Error");
    }
     
  }
  Serial.println(distancia);

  delay(10000);
}
void led() {
  WiFiClient client = server.available();
  if (!client) {
    return;
  }

  // Wait until the client sends some data
  Serial.println("new client");
  while (!client.available()) {
    delay(1);
  }

  // Read the first line of the request
  String request = client.readStringUntil('\r');
  Serial.println(request);
  client.flush();

  // Match the request

  int value = LOW;
  
  if (request.indexOf("/LED=1") != -1)  {
    digitalWrite(ledPin, HIGH);
    myServo.write(180);
    delay(1000);
    myServo.write(0);
    value = HIGH;
    client.println("HTTP/1.1 200 OK");
  }
  if (request.indexOf("/LED=2") != -1)  {
    digitalWrite(ledPin, HIGH);
    myServo.write(180);
    delay(2000);
    myServo.write(0);
    value = HIGH;
  }
  if (request.indexOf("/LED=3") != -1)  {
    digitalWrite(ledPin, HIGH);
    myServo.write(180);
    delay(3000);
    myServo.write(0);
    value = HIGH;
  }
  if (request.indexOf("/LED=4") != -1)  {
    digitalWrite(ledPin, HIGH);
    myServo.write(180);
    delay(4000);
    myServo.write(0);
    value = HIGH;
  }
  return;
}
