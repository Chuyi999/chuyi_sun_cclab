#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup(){
    
    ofSetWindowShape(1024,768);
    ofSetFrameRate(40);
    ofSetBackgroundAuto(false);
    ofBackground(0);
    
    

}

//--------------------------------------------------------------
void ofApp::update(){
    
    
    

}

//--------------------------------------------------------------
void ofApp::draw(){
       if (ofGetMousePressed(OF_MOUSE_BUTTON_LEFT)) {
        
        int numTriangles = 5;
        int minOffset = 5;
        int maxOffset = 70;
        int alpha = 150;
        
        for (int t=0; t<numTriangles; ++t) {
            float offsetDistance = ofRandom(minOffset, maxOffset);
            
            ofVec2f mousePos(ofGetMouseX(), ofGetMouseY());
            
            ofVec2f p1(0, 6.25);
            ofVec2f p2(25, 0);
            ofVec2f p3(0, -6.25);
            
            float rotation = ofRandom(360); 
            p1.rotate(rotation);
            p2.rotate(rotation);
            p3.rotate(rotation);
            
            ofVec2f triangleOffset(offsetDistance, 0.0);
            triangleOffset.rotate(rotation);
            
            p1 += mousePos + triangleOffset;
            p2 += mousePos + triangleOffset;
            p3 += mousePos + triangleOffset;
            
            ofColor pink(255, 224, 0, alpha);
            ofColor purple(255 , random(), 105, alpha);
            ofColor inbetween = pink.getLerped(purple, ofRandom(1.0));
            ofSetColor(inbetween);
            
            ofDrawTriangle(p1, p2, p3);
        }
        
       
    }
    
        if (ofGetMousePressed(OF_MOUSE_BUTTON_RIGHT)) {
        ofBackground(0);
    }
    
    

}

//--------------------------------------------------------------
void ofApp::keyPressed(int key){
       if (key == 's') {
       
        glReadBuffer(GL_FRONT);
        
              ofSaveScreen("savedScreenshot_"+ofGetTimestampString()+".png");
    }
}

//--------------------------------------------------------------
void ofApp::keyReleased(int key){

}

//--------------------------------------------------------------
void ofApp::mouseMoved(int x, int y ){

}

//--------------------------------------------------------------
void ofApp::mouseDragged(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mousePressed(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mouseReleased(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mouseEntered(int x, int y){

}

//--------------------------------------------------------------
void ofApp::mouseExited(int x, int y){

}

//--------------------------------------------------------------
void ofApp::windowResized(int w, int h){

}

//--------------------------------------------------------------
void ofApp::gotMessage(ofMessage msg){

}

//--------------------------------------------------------------
void ofApp::dragEvent(ofDragInfo dragInfo){ 

}
