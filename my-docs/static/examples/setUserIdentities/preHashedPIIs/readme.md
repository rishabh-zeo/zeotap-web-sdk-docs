const AddRoomForm = ({
  onClose,
  onAddRoom,
}: {
  onClose: () => void;
  onAddRoom: (newRoom: any) => void;
}) => {
  const [roomName, setRoomName] = useState("");
  const [roomMeta, setRoomMeta] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!imageFile) {
      alert("Please upload an image.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target && typeof event.target.result === "string") {
        const newRoom = {
          img: event.target.result,
          name: roomName,
          meta: roomMeta || undefined,
        };
        onAddRoom(newRoom);
        setRoomName("");
        setRoomMeta("");
        setImageFile(null);
      }
    };
    reader.readAsDataURL(imageFile);
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        backdropFilter: "blur(8px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <motion.form
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "#1E293B",
          padding: "2rem",
          borderRadius: "1rem",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.4)",
          width: "90%",
          maxWidth: "450px",
          display: "flex",
          flexDirection: "column",
          gap: "1.25rem",
          color: "#CBD5E0",
        }}
      >
        <h2
          style={{
            margin: 0,
            fontSize: "1.75rem",
            fontWeight: "600",
            textAlign: "center",
            color: "#F9FAFB",
          }}
        >
          Add Room Image
        </h2>

        <div>
          <label
            htmlFor="room-name"
            style={{
              display: "block",
              marginBottom: "0.5rem",
              fontWeight: "500",
              color: "#E2E8F0",
            }}
          >
            Room Name
          </label>
          <input
            type="text"
            id="room-name"
            required
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
            style={{
              width: "100%",
              padding: "0.75rem",
              borderRadius: "0.5rem",
              border: "1px solid #475569",
              fontSize: "1rem",
              backgroundColor: "#334155",
              color: "#F9FAFB",
            }}
          />
        </div>

        <div>
          <label
            htmlFor="room-meta"
            style={{
              display: "block",
              marginBottom: "0.5rem",
              fontWeight: "500",
              color: "#E2E8F0",
            }}
          >
            Room Meta (optional)
          </label>
          <textarea
            id="room-meta"
            value={roomMeta}
            onChange={(e) => setRoomMeta(e.target.value)}
            rows={3}
            style={{
              width: "100%",
              padding: "0.75rem",
              borderRadius: "0.5rem",
              border: "1px solid #475569",
              fontSize: "1rem",
              backgroundColor: "#334155",
              color: "#F9FAFB",
              resize: "none",
            }}
          />
        </div>

        <div>
          <label
            htmlFor="room-image-upload"
            style={{
              display: "block",
              marginBottom: "0.5rem",
              fontWeight: "500",
              color: "#E2E8F0",
            }}
          >
            Upload Image
          </label>
          <div style={{ position: "relative" }}>
            <input
              type="file"
              accept="image/*"
              id="room-image-upload"
              onChange={(e) => setImageFile(e.target.files?.[0] || null)}
              style={{
                display: "none",
              }}
            />
            <label
              htmlFor="room-image-upload"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#4B5563",
                color: "#F9FAFB",
                padding: "0.75rem",
                borderRadius: "0.5rem",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
                width: "100%",
                fontSize: "1rem",
                fontWeight: "500",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#6B7280")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#4B5563")
              }
            >
              {imageFile ? "Change Image" : "Choose Image"}
            </label>
            {imageFile && (
              <p
                style={{
                  marginTop: "0.75rem",
                  fontSize: "0.9rem",
                  color: "#9CA3AF",
                  textAlign: "center",
                }}
              >
                {imageFile.name}
              </p>
            )}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "0.75rem",
          }}
        >
          <button
            type="button"
            onClick={onClose}
            className="menuButton"
            style={{
              backgroundColor: "#475569",
              color: "#E2E8F0",
              padding: "0.75rem 1.5rem",
              border: "none",
              borderRadius: "0.5rem",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
              fontSize: "1rem",
              fontWeight: "500",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#6B7280")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#475569")
            }
          >
            Cancel
          </button>

          <button
            type="submit"
            className="menuButton"
            style={{
              backgroundColor: "#2563EB",
              color: "white",
              padding: "0.75rem 1.5rem",
              border: "none",
              borderRadius: "0.5rem",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
              fontSize: "1rem",
              fontWeight: "500",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#1D4ED8")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#2563EB")
            }
          >
            Add
          </button>
        </div>
      </motion.form>
    </div>
  );
};