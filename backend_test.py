#!/usr/bin/env python3
"""
Backend Testing Suite for Turkish Life Insurance Website
Tests email service API endpoints and SMTP functionality
"""

import requests
import json
import time
import sys
from datetime import datetime

# Test configuration
EMAIL_SERVICE_URL = "http://localhost:3001"
BACKEND_URL = "https://c4aa0c06-d370-4e61-9413-bcea13ab9807.preview.emergentagent.com"

class BackendTester:
    def __init__(self):
        self.results = []
        self.passed = 0
        self.failed = 0
        
    def log_result(self, test_name, status, message, details=None):
        """Log test result"""
        result = {
            'test': test_name,
            'status': status,
            'message': message,
            'timestamp': datetime.now().isoformat(),
            'details': details
        }
        self.results.append(result)
        
        if status == 'PASS':
            self.passed += 1
            print(f"✅ {test_name}: {message}")
        else:
            self.failed += 1
            print(f"❌ {test_name}: {message}")
            if details:
                print(f"   Details: {details}")
    
    def test_email_service_health(self):
        """Test email service health endpoint"""
        try:
            response = requests.get(f"{EMAIL_SERVICE_URL}/api/health", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                if data.get('status') == 'OK' and 'smtp' in data:
                    self.log_result(
                        "Email Service Health Check",
                        "PASS",
                        f"Service is healthy - SMTP: {data.get('smtp')}",
                        data
                    )
                else:
                    self.log_result(
                        "Email Service Health Check",
                        "FAIL",
                        "Health check returned invalid response format",
                        data
                    )
            else:
                self.log_result(
                    "Email Service Health Check",
                    "FAIL",
                    f"HTTP {response.status_code}: {response.text}"
                )
                
        except requests.exceptions.RequestException as e:
            self.log_result(
                "Email Service Health Check",
                "FAIL",
                f"Connection error: {str(e)}"
            )
    
    def test_email_service_test_endpoint(self):
        """Test email service test endpoint"""
        try:
            response = requests.get(f"{EMAIL_SERVICE_URL}/api/test-email", timeout=30)
            
            if response.status_code == 200:
                data = response.json()
                if data.get('success') and 'messageId' in data:
                    self.log_result(
                        "Email Service Test Email",
                        "PASS",
                        f"Test email sent successfully - Message ID: {data.get('messageId')}",
                        data
                    )
                else:
                    self.log_result(
                        "Email Service Test Email",
                        "FAIL",
                        "Test email response indicates failure",
                        data
                    )
            else:
                self.log_result(
                    "Email Service Test Email",
                    "FAIL",
                    f"HTTP {response.status_code}: {response.text}"
                )
                
        except requests.exceptions.RequestException as e:
            self.log_result(
                "Email Service Test Email",
                "FAIL",
                f"Connection error: {str(e)}"
            )
    
    def test_quote_email_submission(self):
        """Test quote email submission with realistic Turkish data"""
        test_data = {
            "formData": {
                "name": "Ahmet Yılmaz",
                "email": "ahmet.yilmaz@example.com",
                "phone": "0532 123 45 67",
                "birthDate": "1985-03-15",
                "gender": "Erkek",
                "insuranceType": "Bireysel Hayat Sigortası",
                "coverage": "100.000 TL - 250.000 TL",
                "message": "Merhaba, hayat sigortası hakkında detaylı bilgi almak istiyorum. En uygun teklifi bekliyorum."
            }
        }
        
        try:
            response = requests.post(
                f"{EMAIL_SERVICE_URL}/api/send-quote-email",
                json=test_data,
                headers={'Content-Type': 'application/json'},
                timeout=30
            )
            
            if response.status_code == 200:
                data = response.json()
                if data.get('success') and 'messageId' in data:
                    self.log_result(
                        "Quote Email Submission",
                        "PASS",
                        f"Quote email sent successfully - Message ID: {data.get('messageId')}",
                        data
                    )
                else:
                    self.log_result(
                        "Quote Email Submission",
                        "FAIL",
                        "Quote email response indicates failure",
                        data
                    )
            else:
                self.log_result(
                    "Quote Email Submission",
                    "FAIL",
                    f"HTTP {response.status_code}: {response.text}"
                )
                
        except requests.exceptions.RequestException as e:
            self.log_result(
                "Quote Email Submission",
                "FAIL",
                f"Connection error: {str(e)}"
            )
    
    def test_quote_email_validation(self):
        """Test quote email validation with invalid data"""
        invalid_data = {
            "formData": {
                "name": "",  # Empty name
                "email": "invalid-email",  # Invalid email
                "phone": "123"  # Invalid phone
            }
        }
        
        try:
            response = requests.post(
                f"{EMAIL_SERVICE_URL}/api/send-quote-email",
                json=invalid_data,
                headers={'Content-Type': 'application/json'},
                timeout=10
            )
            
            if response.status_code == 400:
                data = response.json()
                if not data.get('success'):
                    self.log_result(
                        "Quote Email Validation",
                        "PASS",
                        "Invalid data properly rejected",
                        data
                    )
                else:
                    self.log_result(
                        "Quote Email Validation",
                        "FAIL",
                        "Invalid data was accepted",
                        data
                    )
            else:
                self.log_result(
                    "Quote Email Validation",
                    "FAIL",
                    f"Expected 400 status, got {response.status_code}: {response.text}"
                )
                
        except requests.exceptions.RequestException as e:
            self.log_result(
                "Quote Email Validation",
                "FAIL",
                f"Connection error: {str(e)}"
            )
    
    def test_main_backend_api(self):
        """Test main backend API endpoints"""
        try:
            # Test root endpoint
            response = requests.get(f"{BACKEND_URL}/api/", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                if data.get('message') == 'Hello World':
                    self.log_result(
                        "Main Backend API Root",
                        "PASS",
                        "Root endpoint working correctly",
                        data
                    )
                else:
                    self.log_result(
                        "Main Backend API Root",
                        "FAIL",
                        "Root endpoint returned unexpected response",
                        data
                    )
            else:
                self.log_result(
                    "Main Backend API Root",
                    "FAIL",
                    f"HTTP {response.status_code}: {response.text}"
                )
                
        except requests.exceptions.RequestException as e:
            self.log_result(
                "Main Backend API Root",
                "FAIL",
                f"Connection error: {str(e)}"
            )
    
    def test_main_backend_status_endpoints(self):
        """Test main backend status check endpoints"""
        try:
            # Test GET status endpoint
            response = requests.get(f"{BACKEND_URL}/api/status", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                if isinstance(data, list):
                    self.log_result(
                        "Main Backend Status GET",
                        "PASS",
                        f"Status endpoint returned {len(data)} records",
                        {"record_count": len(data)}
                    )
                else:
                    self.log_result(
                        "Main Backend Status GET",
                        "FAIL",
                        "Status endpoint returned non-list response",
                        data
                    )
            else:
                self.log_result(
                    "Main Backend Status GET",
                    "FAIL",
                    f"HTTP {response.status_code}: {response.text}"
                )
                
        except requests.exceptions.RequestException as e:
            self.log_result(
                "Main Backend Status GET",
                "FAIL",
                f"Connection error: {str(e)}"
            )
        
        # Test POST status endpoint
        try:
            test_status = {
                "client_name": "Test Client - LifeSigortam"
            }
            
            response = requests.post(
                f"{BACKEND_URL}/api/status",
                json=test_status,
                headers={'Content-Type': 'application/json'},
                timeout=10
            )
            
            if response.status_code == 200:
                data = response.json()
                if data.get('client_name') == test_status['client_name'] and 'id' in data:
                    self.log_result(
                        "Main Backend Status POST",
                        "PASS",
                        f"Status created successfully - ID: {data.get('id')}",
                        data
                    )
                else:
                    self.log_result(
                        "Main Backend Status POST",
                        "FAIL",
                        "Status creation returned unexpected response",
                        data
                    )
            else:
                self.log_result(
                    "Main Backend Status POST",
                    "FAIL",
                    f"HTTP {response.status_code}: {response.text}"
                )
                
        except requests.exceptions.RequestException as e:
            self.log_result(
                "Main Backend Status POST",
                "FAIL",
                f"Connection error: {str(e)}"
            )
    
    def run_all_tests(self):
        """Run all backend tests"""
        print("🧪 Starting Backend Testing Suite for Turkish Life Insurance Website")
        print("=" * 70)
        
        # Email Service Tests (Priority: HIGH)
        print("\n📧 EMAIL SERVICE TESTS")
        print("-" * 30)
        self.test_email_service_health()
        self.test_email_service_test_endpoint()
        self.test_quote_email_submission()
        self.test_quote_email_validation()
        
        # Main Backend API Tests
        print("\n🔧 MAIN BACKEND API TESTS")
        print("-" * 30)
        self.test_main_backend_api()
        self.test_main_backend_status_endpoints()
        
        # Summary
        print("\n" + "=" * 70)
        print("📊 TEST SUMMARY")
        print("=" * 70)
        print(f"✅ Passed: {self.passed}")
        print(f"❌ Failed: {self.failed}")
        print(f"📈 Success Rate: {(self.passed / (self.passed + self.failed) * 100):.1f}%")
        
        if self.failed > 0:
            print("\n🚨 FAILED TESTS:")
            for result in self.results:
                if result['status'] == 'FAIL':
                    print(f"   • {result['test']}: {result['message']}")
        
        return self.passed, self.failed, self.results

if __name__ == "__main__":
    tester = BackendTester()
    passed, failed, results = tester.run_all_tests()
    
    # Exit with error code if tests failed
    sys.exit(1 if failed > 0 else 0)