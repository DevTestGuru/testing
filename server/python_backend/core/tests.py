from django.test import TestCase, Client
import json


class NotesAPITest(TestCase):
    def setUp(self):
        self.client = Client()

    def test_create_note(self):
        response = self.client.post(
            "/notes",
            json.dumps({"title": "Test Note", "content": "This is a test"}),
            content_type="application/json",
        )
        self.assertEqual(response.status_code, 201)
        self.assertIn("id", response.json())

    def test_list_notes(self):
        # Ensure there's at least one note
        self.test_create_note()
        response = self.client.get("/notes/")
        self.assertEqual(response.status_code, 200)
        self.assertTrue(len(response.json()) >= 1)

    def test_get_single_note(self):
        post_response = self.client.post(
            "/notes",
            json.dumps({"title": "Another Note", "content": "Content here"}),
            content_type="application/json",
        )
        note_id = post_response.json()["id"]
        response = self.client.get(f"/notes/{note_id}")
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json()["title"], "Another Note")

    def test_update_note(self):
        post_response = self.client.post(
            "/notes",
            json.dumps({"title": "Old Title", "content": "Old Content"}),
            content_type="application/json",
        )
        note_id = post_response.json()["id"]
        response = self.client.put(
            f"/notes/{note_id}/update",
            json.dumps({"title": "New Title"}),
            content_type="application/json",
        )
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json()["title"], "New Title")

    def test_delete_note(self):
        post_response = self.client.post(
            "/notes",
            json.dumps({"title": "To be deleted", "content": "Goodbye"}),
            content_type="application/json",
        )
        note_id = post_response.json()["id"]
        response = self.client.delete(f"/notes/{note_id}/delete")
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json()["message"], "Note deleted")
